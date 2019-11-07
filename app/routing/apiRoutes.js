// 4. Your `apiRoutes.js` file should contain two routes:

//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var getFriends = require("../data/friends")
// var getNewFriends = require("../public/survey")

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
            res.json(getFriends)

          });

    app.post("/api/friends", function(req,res){
        getFriends.push(req.body)

        // var sum = getFriends.map(function(num, index){
        //     return num + getFriends.scores[index]
        // })
        console.log(getFriends[0].scores)
        console.log(getFriends[1].scores)
    })
        
}

// var sum = getFriends.scores + 
// //friends.scores
// var array1 = [1, 5, 3, 7]

// //newFriends.scores
// var array2 = [1, 1, 4, 1]

// module.exports = function(app){
//     app.post("/api/friends", function(req, res) {
//             res.json(getFriends)

//     var sum = getFriends.map(function(num, index){
//         return num + newFriends[index]
//     })
//     console.log(sum)
//     })
//     console.log(sum)
// }