import express from 'express';
const router = express.Router();

// Get Homepage
router.get('/dashboard',ensureAuthenticated, (req, res) => {
	res.render('dashboard');
});

router.get('/', (req,res) => {
	res.render('index')
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
