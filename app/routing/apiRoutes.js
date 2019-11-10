var getFriends = require('../data/friends.js')
// var getNewFriends = require("../public/survey")
module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(getFriends)
  })
    app.post('/api/friends', function (req, res) {
    // getFriends.push(req.body)
    var userdata = req.body
    console.log(userdata)
    var matches = []
    var lookForMatch = 0
    var matchFound = 0
        console.table(getFriends)
    for (let i = 0; i < getFriends.length; i++) {
      var difference = 0
      for (let j = 0; j < getFriends[i].scores.length; j++) {
        getFriends[i].scores[j] = parseInt(getFriends[i].scores[j])
    
        userdata.scores[j] = parseInt(userdata.scores[j])
        difference += Math.abs(getFriends[i].scores[j] - userdata.scores[j])
        console.log('adfadfasdfasfd', difference)
      }
      matches.push(difference)
      // console.log(difference)
      // console.log(matches)
    }
    // var final = matches, goal = 0;
    // var closest = final.reduce(function(prev, curr){
    //     return (Math.abs(curr-goal) < Math.abs(prev - goal) ? curr : prev);
    // })
    //     // console.log(closest)
    console.log(matches)
    lookForMatch = Math.min.apply(Math, matches)
    console.log(lookForMatch)
    matchFound = matches.indexOf(lookForMatch)
    getFriends.push(userdata)
    res.json(getFriends[matchFound])
    // console.log(matchFound)
    // console.log(getFriends)
    console.log(getFriends[matchFound])
  })
}
