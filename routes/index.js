import express from 'express';
const router = express.Router();
import toastr from 'express-toastr'

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
		res.redirect('/users/login');
	}
}

module.exports = router;
