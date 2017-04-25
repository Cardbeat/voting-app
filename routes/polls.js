//  habilidade de adicionar mais opções as enquetes..

import express from 'express';
import User from '../models/user';
import Poll from '../models/poll';
const router = express.Router();


router.get('/api/polls', (req, res) => {
	const polls = req.sessionStore.sessions;
	const id = JSON.parse(polls[Object.keys(polls)[0]]).passport.user;
	User.findOne({_id: id})
		.then(user => {
			res.json({polls : user.polls});
		})
});

router.post('/newpoll', (req, res) => {

	const question = req.body.question;
	const choices = req.body.choices;
	const choiceSchema = [];

	choices.map(item => {
		const choice = {
			text: item
		};
		choiceSchema.push(choice);
	});
	const newPoll = new Poll({
		question: question,
		choices: choiceSchema
	})
	User.findOne({
		email: req.user.email
	}).then(element => {
		element.polls.push(newPoll);
		newPoll.save();
		const pollUrl = newPoll._id;
		res.redirect('/poll/' + pollUrl);
	});
});

router.get('/:id', (req, res) => {
	Poll.find({
		_id: req.params.id
	}).then(poll => {
		res.render('poll', { question: poll[0].question, choices: poll[0].choices  });
	})
});

module.exports = router;
