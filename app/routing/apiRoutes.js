let friendDB = require("../data/friend");

module.exports = function(app){


app.get("/api/friends", function(req, res) {
    console.log("------- Inside '/api/friends Route Ma Dewd!!  '--------");
    return res.json(friendDB);
});

// app.post("/api/friends", function(req, res) {
//     var newFriend = req.body;
//     console.log(newFriend);

//     friendDB.push(newFriend);
//     return res.json(friendDB);
// });

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log("Inside Post");

    var newFriendScore = 0;
    for (var i = 0; i < newFriend.scores.length; i++) {
        newFriendScore += parseInt(newFriend.scores[i])
    }

    var friendMatch = null;
    var friendScoreDiff = null;

    for (var i = 0; i < friendDB.length; i++) {
        var currentFriendScore = 0;
        for (var j = 0; j < friendDB[i].scores.length; j++){
            currentFriendScore += parseInt(friendDB[i].scores[j]);
        }

        var currentDifference = Math.abs(newFriendScore - currentFriendScore); 
        if (friendScoreDiff === null || currentDifference < friendScoreDiff) {
            friendScoreDiff = currentDifference;
            friendMatch = i;
        }
    }

    friendDB.push(newFriend);

    return res.json(friendDB[friendMatch]);



})

}