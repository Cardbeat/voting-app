import express from 'express';
import mongoose from 'mongoose';
import  db from './database/db';
import passport from 'passport';
import flash from 'connect-flash';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';

const app= express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app/client/public'));
app.set('views', 'app/client/views');
app.set('view engine', 'pug');

app.get('*', (req , res ) => {
  res.render('index');
});

const port = process.env.NODE_ENV || 3000;

app.listen(port, () =>  { console.log(`running app at ${port}`) });
