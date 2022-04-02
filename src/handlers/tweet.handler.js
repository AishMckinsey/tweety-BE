const services = require("../services/tweet.services");

const insertData = async (req, res) => {
  try {
    const data = await services.insertData();
    res.json({ data }).status(200);
  } catch (err) {
    res.json({ message: `There is something wrong ${err}` }).status(500);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await services.getAllUsers();
    res.json({ allUsers }).status(200);
  } catch (err) {
    res.json({ message: `There is something wrong ${err}` }).status(500);
  }
};
const getTweetsByUser = async (req, res) => {
  try {
    const tweetOfUser = await services.getTweetsByUser(req.params.userId);
    res.json({ tweetOfUser }).status(200);
  } catch (err) {
    res.json({ message: `There is something wrong ${err}` }).status(500);
  }
};
const addTweetsByUser = async (req, res) => {
  try {
    const addTweet = await services.addTweetsByUser(
      req.params.userId,
      req.params.text
    );
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
  getAllUsers,
  getTweetsByUser,
  addTweetsByUser,
};
