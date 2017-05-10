import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';
import passport from 'passport';
import expressValidator from 'express-validator';
import session from 'express-session';
import flash from 'connect-flash';
import routes from './routes/index.js';
import users from './routes/users.js';
import polls from './routes/polls.js';
import './database.js';
import toastr from 'express-toastr';

const LocalStrategy = require('passport-local').Strategy;
const app = express();



// Express Session
app.use(session({
    secret: 'itsapoll',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());


// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());
app.use(toastr());


app.set('views', './views');
app.set('view engine', 'pug');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('itsapoll'));
app.use(express.static('public'));

// Routes

app.use('/', routes);
app.use('/users', users);
app.use('/poll', polls)

const port = 3000 || process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`server running at ${port} `);
});
