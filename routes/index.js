var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	if (ensureAuthenticated) {
		res.sendfile('./public/home.html');
	}
});

router.get('/auth', function(req, res) {
	res.sendfile('./public/auth.html');
});
router.get('/home', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/home.html');
});
router.get('/backpack', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/backpack.html');
});
router.get('/catchThemAll', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/catchThemAll.html');
});
router.get('/gyms', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/gyms.html');
});
router.get('/information', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/information.html');
});
router.get('/multiplayer', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/multiplayer.html');
});
router.get('/pokedex', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/pokedex.html');
});
router.get('/roster', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/roster.html');
});
router.get('/settings', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/settings.html');
});
router.get('/store', ensureAuthenticated, function(req, res) {
  res.sendfile('./public/store.html');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
res.redirect('/auth')
}

module.exports = router;
