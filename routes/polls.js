// controlador de polls
// dar o get pra todos os polls
// dar o post pra criar e gerar o link adicionado ao componente
// criar component new poll, criar component getAllPolls
// usar shortid pra gerar o link

import express from 'express';
import User from '../models/user';
import Poll from '../models/poll';
const router = express.Router();

// Get Homepage
router.post('/newpoll', (req, res) => {
	// preciso criar um mapa pra ir criando todos os schemas começando pelas opções e ir subindo, não se esqueça, você consegue !
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
		res.render('poll', poll);
	})
});

module.exports = router;
