var user = require('../controllers/users.js');

module.exports = function(app){
	app.post('/name', user.save_name)
	app.get('/get_name', user.return_name)
	app.post('/poll', user.poll)
	app.get('/polls', user.polls)
	app.post('/survey', user.survey)
	app.post('/vote', user.vote)
	app.post('/delete', user.del)
}