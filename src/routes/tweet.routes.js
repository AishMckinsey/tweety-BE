const express = require("express");
const tweetHandler = require("../handlers/tweet.handler");

const tweetRouter = express.Router();

tweetRouter.get("/insertData", tweetHandler.insertData);
tweetRouter.get("/allTweets", tweetHandler.getAllTweets);
tweetRouter.get("/allTweets/:userId", tweetHandler.getTweetsByUser);
tweetRouter.post("/allTweets/:userId", tweetHandler.addTweetsByUser);

module.exports = {
  tweetRouter,
};
