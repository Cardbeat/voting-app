import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const choiceSchema = new Schema({
  text: String,
  votes: {type: Number, default: 0}
});

const PollSchema = new Schema({
  question: { type: String, required: true},
  choices: [choiceSchema]
})

module.exports = PollSchema

const Poll = module.exports = mongoose.model('Poll', PollSchema);
