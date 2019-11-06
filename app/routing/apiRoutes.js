// 4. Your `apiRoutes.js` file should contain two routes:

//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var getFriends = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
            res.json(getFriends)
          });

    app.post("/api/friends", function(req,res){
        getFriends.push(req.body)
        res.json(true)
    })
        
}



// var express = require("express");
// var path = require("path");

// var app = express();
// var PORT = 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/api/friends", function(req, res) {
//     console.log("Test")
//     // return res.json(path.join(__dirname, "../data/friends.js"));
//   });

// app.post("/api/friends", function(req, res) {
//     res.sendFile(path.join(__dirname, "../data/friends.js"));
//     var newFriend = req.body
//     friends.push(newFriend)
//     res.json(newFriend)
// });

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
// });