const express = require('express');
const router = express.Router();
const friends = require('../config/friends');

router.get('/friends', function (req, res, next) {
  res.json(friends);
});

router.post('/friends', function (req, res, next) {
  console.log(req.body);
  let potentialFriend = {
    index: 0,
    score: 0,
  };
  for (let i = 0; i < friends.results.length; i++) {
    let element = friends.results[i];

    let score = 0;

    for (let index = 0; index < element.scores.length; index++) {
      score += Math.abs(parseInt(element.scores[index]) - parseInt(req.body[index + 1]));
    }
    if (potentialFriend.score === 0) {
      potentialFriend.score = score
      potentialFriend.index = i
    } else if (score <= potentialFriend.score) {
      potentialFriend.score = score
      potentialFriend.index = i
    }
  }
  res.send({
    friend: potentialFriend,
    friends: friends
  })
});


module.exports = router;
