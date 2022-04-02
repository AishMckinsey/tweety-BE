const models = require("../../models");
const users = require("../fixtures/users.fixtures.json");
const tweets = require("../fixtures/tweets.fixtures.json");

const insertData = async () => {
  try {
    await models.Users.bulkCreate(users);
    await models.Tweets.bulkCreate(tweets);
  } catch (err) {
    throw new Error("Error in inserting data");
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await models.Users.findAll({
      attributes: ["name", "screen_name", "location"],
    });
    return allUsers;
  } catch (err) {
    throw new Error(`Error in getting data : ${err}`);
  }
};

const getTweetsByUser = async (userId) => {
  try {
    const getTweets = await models.Tweets.findAll({
      attributes: ["text"],
      where: {
        user_id: userId,
      },
    });

    return getTweets;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

const addTweetsByUser = async (userId, text) => {
  try {
    await models.Tweets.create({
      user_id: userId,
      text: text,
    });
  } catch (err) {
    throw new Error("Error in inserting data");
  }
};

module.exports = {
  insertData,
  getAllUsers,
  getTweetsByUser,
  addTweetsByUser,
};
