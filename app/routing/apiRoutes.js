var getFriends = require("../data/friends")
// var getNewFriends = require("../public/survey")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(getFriends)

    });

    app.post("/api/friends", function (req, res) {
        getFriends.push(req.body)
        var userdata = req.body
        var userdataTwo = userdata.scores.map(function (req){
            return parseInt(req, 10)
        })
        // console.log(userdataTwo)


        var matches = []
        var lookForMatch = 0
        var matchFound = 0

        for (let i = 0; i < getFriends.length-1; i++) {
            var difference = 0
            for (let j=0; j < getFriends[i].scores.length; j++){
                getFriends[i].scores[j] = parseInt(getFriends[i].scores[j])
                userdata.scores[j] = parseInt(userdata.scores[j])
                difference += Math.abs(getFriends[i].scores[j] - userdata.scores[j])
        //         console.log("test", getFriends[i].scores[j])
        // console.log("test2", userdata.scores[j])
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


        lookForMatch = Math.max.apply(Math, matches)
        matchFound = matches.indexOf(lookForMatch)
        // getFriends.push(userdata)
        res.json(userdata[matchFound])

    })

}
