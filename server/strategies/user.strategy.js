const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    pool
        .query('SELECT * FROM "user" WHERE id = $1', [id])
        .then((result) => {
            // handle errors
            const user = result && result.rows && result.rows[0];

            if (user) {
                // user found
                delete user.password; // remove password so it doesn't get sent
                done(null, user); // done takes an error (null) and a user
            } else {
                // user not found
                // done takes an error and a user (both null in this case)
                done(null, null);
                // this will result in the server returning a 401 status code
            }
        })
        .catch((error) => {
            console.log('Error with query during deserializing user...', error);
            // done takes an error (there is one in this case) and a user
            done(error, null);
            // this will result in the server returning a 500 status code
        });
});

// now that we have the user we must do the work of logging in
passport.use(
    'local',
    new LocalStrategy((username, password, done) => {
        pool
            .query('SELECT * FROM "user" WHERE username = $1', [username])
            .then((result) => {
                const user = result && result.rows && result.rows[0];
                if (user && encryptLib.comparePassword(password, user.password)) {
                    // passwords match
                    done(null, user);
                } else {
                    // username and password don't match
                    done(null, null);
                    // returns 401 status code
                }
            })
            .catch((error) => {
                console.log('Error with query for user...', error);
                done(error, null);
                // returns 500 status code
            });
    })
);

module.exports = passport;