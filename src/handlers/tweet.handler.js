const services = require("../services/tweet.services");

const insertData = async (req, res) => {
  try {
    const data = await services.insesrtData();
    res.json({ data }).status(200);
  } catch (err) {
    res.json({ message: `There is something wrong ${err}` }).status(500);
  }
};
const getAllTweets = async (req, res) => {
  try {
    const allTweets = await services.getAllTweets();
    res.json({ allTweets }).status(200);
  } catch (err) {
    res.json({ message: `There is something wrong ${err}` }).status(500);
  }
};
const getTweetsByUser = async (req, res) => {
  try {
    const tweetOfUser = await services.getTweetsByUser();
    res.json({ tweetOfUser }).status(200);
  } catch (err) {
    res.json({ message: `There is something wrong ${err}` }).status(500);
  }
};
const addTweetsByUser = async (req, res) => {
  try {
    const addTweet = await services.addTweetsByUser();
    res.json({ addTweet }).status(200);
  } catch (err) {
    res
      .json({
        message: `There is something wrong ${err}`,
      })
      .status(500);
  }
};

module.exports = {
  insertData,
  getAllTweets,
  getTweetsByUser,
  addTweetsByUser,
};
