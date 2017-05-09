import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ChoiceSchema = new Schema({
  text: String,
  votes: Number
});

const PollSchema = new Schema({
  question: { type: String, required: true},
  choices: [ChoiceSchema],
  ip:[String]
})

const Poll = module.exports = mongoose.model('Poll', PollSchema);
