import mongoose from 'mongoose';

const mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/votingapp_development';
const mongoOptions = {db: {safe: true}};
const db = mongoose.connection;
mongoose.connect(mongoUri, mongoOptions);
db.on('connected', () => {
  console.log(`Mongoose connection open to ${mongoUri}`);
});

db.on('error', err => {
  console.error(`mongodb connection error : ${err}`);
  process.exit(-1);
});

db.on('disconnected', () => {  
  console.log('Mongoose default connection disconnected'); 
});


