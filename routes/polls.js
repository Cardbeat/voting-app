// controlador de polls
// dar o get pra todos os polls
// dar o post pra criar e gerar o link adicionado ao componente
// criar component new poll, criar component getAllPolls
// usar shortid pra gerar o link

import express from 'express';
const router = express.Router();

// Get Homepage
router.post('/newpoll', (req, res) => { 
	res.render('dashboard');
});


module.exports = router;
