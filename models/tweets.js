"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tweets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users }) {
      // define association here

      Tweets.belongsTo(Users, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
    }
  }
  Tweets.init(
    {
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tweets",
    }
  );
  return Tweets;
};
