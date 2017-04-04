import mongoose from 'mongoose';

const db = 'mongodb://localhost/pollapp';

(() => {
  mongoose.Promise = global.Promise;
  mongoose.connect(db);
})()
