import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const voteSchema = new Schema({ ip: 'String'});

const choiceSchema = new Schema({
  text: String,
  votes: [voteSchema]
});

const PollSchema = new Schema({
  question: { type: String, required: true},
  choices: [choiceSchema]
})

const Poll = module.exports = mongoose.model('Poll', PollSchema);
