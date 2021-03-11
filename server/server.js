// express.js import
const express = require('express');

// dotenv config
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

// auth stuff
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// route includes
const userRouter = require('./routes/user.router');

// set up body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport session configuration
app.use(sessionMiddleware);

// start Passport session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));

// set listening Port
const PORT = process.env.PORT || 5000;

// Listen!
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`)
})