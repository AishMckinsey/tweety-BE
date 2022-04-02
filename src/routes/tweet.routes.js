const express = require("express");
const tweetHandler = require("../handlers/tweet.handler");

const tweetRouter = express.Router();

tweetRouter.get("/insertData", tweetHandler.insertData);
tweetRouter.get("/allUsers", tweetHandler.getAllUsers);
tweetRouter.get("/allTweets/:userId", tweetHandler.getTweetsByUser);
tweetRouter.post("/allTweets/:userId/:text", tweetHandler.addTweetsByUser);

module.exports = {
  tweetRouter,
};
