const express = require('express');
const router = express.Router();
const survey = require('../config/survey');

router.get('/', function(req, res, next) {
  res.render('survey', {survey});
});

router.post('/', function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
