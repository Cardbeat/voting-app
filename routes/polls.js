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
			res.json({user : user});
		})
});

router.post('/newpoll', (req, res) => {
	const question = req.body.question;
	const choices = req.body.choices;
	const options = [];
	choices.map(item => {
		const choice = {
			text: item,
			votes: []
		};

		options.push(choice);
	});

	const newPoll = new Poll({
		question: question,
		choices: options
	}, { strict: false })

	User.findOne({ email: req.user.email })
		.then(element => {
		element.polls.push(newPoll);
		res.redirect(`${element._id}/${newPoll._id}`);
	});
});

router.post('/remove/:user/:id', (req, res) => {
	User.findOne({_id:req.params.user})
		.then((user) => {
			user.polls.map(poll => {
				if(poll._id == req.params.id) {
					user.polls.splice(user.polls.indexOf(poll),1)
				}
			});
			user.save();
			res.render('dashboard');
		});
});

router.get('/:user/:id', (req, res) => {
	User.findOne({_id:req.params.user})
		.then((user) => {
			let count = 0;
			let pollObj = [];
			user.polls.map(poll => {
				if(poll._id == req.params.id) {
					pollObj = poll;
					count++
				}
			});
			if(count === 0 ) {
				console.log('no results found')
			}
			res.render('poll', {question: pollObj.question, choices: pollObj.choices});
		});

});

router.post('/:user/:id', (req, res) => {
	User.findOne({_id : req.params.user})
		.then((user) => {
			user.polls.map( (poll) => {
				if(poll._id == req.params.id) {
					let newVote = poll.choices[req.body.choice].votes;
					newVote.push(req.ip);
					console.log(poll.choices[req.body.choice].votes)
				}
			});
			user.save();
		})
});

module.exports = router;
