import mongoose from 'mongoose';

const db = 'mongodb://pollapp:pollapp@ds113282.mlab.com:13282/pollapp';

(() => {
  mongoose.Promise = global.Promise;
  mongoose.connect(db);
})()
