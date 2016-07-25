var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PollSchema = new mongoose.Schema({
	user: {"type":String, required:true},
	question: {"type":String, required:true, minlength: 8},
	_vote : [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
},{timestamps: true });

var VoteSchema = new mongoose.Schema({
	_poll: [{ type: Schema.Types.ObjectId, ref: 'Poll' }],
	option1: {"type":String, required:true, minlength: 3},
	votes1: {"type":Number, required:true},
	option2: {"type":String, required:true, minlength: 3},
	votes2: {"type":Number, required:true},
	option3: {"type":String, required:true, minlength: 3},
	votes3: {"type":Number, required:true},
	option4: {"type":String, required:true, minlength: 3},
	votes4: {"type":Number, required:true},
})

var Poll  = mongoose.model('Poll', PollSchema);
var Vote = mongoose.model('Vote', VoteSchema);