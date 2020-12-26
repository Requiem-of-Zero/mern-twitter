const express = require("express");
const router = express.Router();
const Tweet = require('../../models/Tweet')
const passport = require('passport');
const validateTweetInput = require('../../validation/tweets');

router.get("/test", (req, res) => res.json({ msg: "This is the tweets route" }));

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTweetInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const newTweet = new Tweet({
      text: req.body.text,
      user: req.user.id
    });
  
    newTweet.save().then(tweet => res.json(tweet));
  }
);

module.exports = router;