import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const voteSchema = new Schema({ ip: 'String'});

const choiceSchema = new Schema({
  text: String,
  votes: [voteSchema]
});

exports.PollSchema = new Schema({
  question: { type: String, required: true},
  choices: [choiceSchema]
})
