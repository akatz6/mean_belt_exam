var mongoose = require('mongoose'),
Poll = mongoose.model('Poll'),
Vote = mongoose.model('Vote');
var name = ""

module.exports = (function(){
  return {
  	save_name:function(req, res){
  		req.session.user = req.body.user
  		res.json({'user': req.session.user})
  	}, //end of save name methord
  	return_name:function(req, res){
  		console.log(req.session.user)
  		res.json({'user': req.session.user})
  	}, // end of return name method
    poll:function(req, res){
      console.log(req.body)
      var poll = new Poll({
        user: req.session.user,
        question: req.body.question,
      })
      poll.save(function(err, poll){
        if(err){
          res.json({'error': true})
        } else {
          vote = new Vote({
            option1: req.body.option_one,
            votes1: 0,
            option2: req.body.option_two,
            votes2: 0,
            option3: req.body.option_three,
            votes3: 0,
            option4: req.body.option_four,
            votes4: 0,
          })
          vote._poll = poll._id
          vote.save(function(err, votes){
            if(err){
              console.log(err)
            }else {
              poll._vote.push(votes)
              poll.save(function(err, results){
                if(err){
                  res.json({'error': true})
                } else {
                  console.log(results)
                }
              })
            } 
          })
        }
      })
    }, // end of poll method
    polls: function(req, res){
      Poll.find({})
      .populate('_vote')
      .exec(function(err, votes){
        if(err){
          console.log(err)
        } else {
          res.json({'votes': votes})
        }
      })
    }, // end of poll method
    survey: function(req, res){
      console.log(req.body)
       Poll.findOne({question:req.body.question})
          .populate('_vote')
          .exec(function(err, votes){
              res.json({'votes':votes});
          })
    }, // end of survery function
    vote: function(req, res){
      var option = "option" + req.body.number
      var choice = req.body.choice
      var query = {}
      query[option] = choice
      console.log(option)
      console.log(req.body)
      Vote.findOne(query,
        function(err, choice){
          if(err){
            console.log(err)
            res.json({'error':true})
          } else {
            var votes = "votes" + req.body.number
            var sub_query ={}
            console.log(choice[votes])
            choice[votes] += 1
            console.log(choice)
            choice.save(function(err, new_choice){
              if(err){
                res.json({'error':true})
              }
              else{
                console.log(choice)
              }
            })
          }
        })
    },// end of vote method
    del: function(req, res){
      console.log(req.body)
      console.log("In dell method")
      Poll.remove({question:req.body.question}, function(err){
        if(err){
          res.json({'error':true})
        }
      })
    }
























  }
})();