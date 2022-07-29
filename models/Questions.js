const {Sequelize, DataTypes} = require("sequelize");
module.exports = function createUserModel(sequelize) {
  const Question = sequelize.define(
    "Question",
    {
      question_id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true},
      product_id: { type: DataTypes.INTEGER, allowNull: false },
      question_body: { type: DataTypes.STRING, allowNull: false },
      question_date: { type: DataTypes.STRING, allowNull: false },
      asker_name: { type: DataTypes.STRING, allowNull: false },
      question_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
      },
      question_helpfulness: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      reported: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },

    },
    {}
  );
  return Question;
};