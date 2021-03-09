const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
    // send back user object from the session (queried from the database)
    res.send(req.user);
});

// handles POST request with new user data
router.post('/register', (req, res, next) => {
    // user object
    const user = req.body;
    // encrypting the password before we insert into database
    const password = encryptLib.encryptPassword(req.body.password);

    const sqlText = `INSERT INTO "user" ("username", "password", "first_name", "last_name", "street", "city", "state", "zip")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`;
    
    // query the database to add the user
    pool
        .query(sqlText, [user.username, password, user.first_name, user.last_name, user.street, user.city, user.state, user.zip])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log('User registration failed...', err);
            res.sendStatus(500);
        });
});

// handles login authentication with the middleware we set up in server/strategies
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});

// clear all server session information about this user upon logout
router.post('/logout', (req, res) => {
    // use passport's built in method to logout the user
    req.logout();
    res.sendStatus(200);
});

module.exports = router;