import express from 'express';
import User from '../models/user';
import Poll from '../models/poll';
import IdGen from 'auth0-id-generator';
const router = express.Router();
const generator = new IdGen();


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
			votes: 0
		};

		options.push(choice);
	});

	const newPoll = new Poll({
		question: question,
		choices: options,
		ip: []
	});

	User.findOne({ email: req.user.email })
		.then(element => {
		element.polls.push(newPoll);
		element.save();
		return res.redirect(`${element._id}/${newPoll._id}`);
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
		.then( user => {
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
			res.render('poll', {question: pollObj.question, choices: pollObj.choices, req: req});
		});

});

router.post('/:user/:id', (req, res) => {
	console.log(req.body.choice)
	User.findById(req.params.user)
		.then(user => {
			user.polls.map(poll => {
				if(poll._id == req.params.id && poll.ip.indexOf(req.ip) === -1) {
					if(req.body.choice.length > 1 ) {
						const id = generator.newUid(10);
						const newChoice = {
							_id: id,
							text: req.body.choice[1],
							votes: 1
						};
						poll.ip.push(req.ip);
						poll.choices.push(newChoice);
						user.markModified('polls');
						user.save();
						console.log(poll.choices)
						req.toastr.success('Thanks for the vote !');
						return res.redirect(req.get('referer'));
					} else {
						console.log(poll.ip);
						poll.ip.push(req.ip);
						poll.choices[req.body.choice].votes++;
						user.markModified('polls');
						user.save();
						console.log(poll.choices[req.body.choice].votes)
						req.toastr.success('Thanks for the vote !');
						return res.redirect(req.get('referer'));
					}
				}else {
					req.toastr.error('You alredy voted');
					return res.redirect(req.get('referer'));
				}
			});
		});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		return res.redirect('/users/login');
	}
}

module.exports = router;
