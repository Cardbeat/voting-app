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
	// preciso criar um mapa pra ir criando todos os eschemas começando pelas opções e ir subindo, não se esqueça, você consegue !
	const question = req.body.question;
	const choices = req.body.choices;

	const newPoll = new Poll({
		question: question,
		choices: choices
	})
	User.findOne({
		email: req.user.email
	}).then(result => {
		result.polls.push(newPoll);
		console.log(result.polls);
	})
	res.render('dashboard');
});


module.exports = router;
