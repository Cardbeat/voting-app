import express from 'express';
import mongoose from 'mongoose';
import  db from './db';
import passport from 'passport';
import flash from 'connect-flash';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import react from 'express-react-views';

const app= express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', react.createEngine('babel'));



app.get('*', (req , res ) => {
  console.log("enviado!");
  res.render('index.jsx');
});

const port = process.env.NODE_ENV || 3000;

app.listen(port, () =>  { console.log(`running app at ${port}`) });
