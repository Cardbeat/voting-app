import express from 'express';
import mongoose from 'mongoose';
import  db from './db';

const app= express();

app.get('*', (req , res ) => {
  console.log("enviado!");
  res.send('funcionou!');
});

const port = process.env.NODE_ENV || 3000;

app.listen(port, () =>  { console.log(`running app at ${port}`) });
