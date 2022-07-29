'use strict';
const fs = require("fs");
const path = require("path");
const readFile = require("util").promisify(fs.readFile);

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      const queryPath = path.resolve(__dirname, "../queries/SDC-Questions-Answers.sql");
      const query = await readFile(queryPath, "utf8");
      return await queryInterface.sequelize.query(query);

    } catch (err) {
      console.error("Unable to create tables: ", err);
    }
  },

  async down (queryInterface, Sequelize) {
    try {
      const queryPath = path.resolve(__dirname, "../queries/drop-tables.sql");
      const query = await readFile(queryPath, "utf8");
      return await queryInterface.sequelize.query(query);

    } catch (err) {
      console.error("Unable to drop tables: ", err);
    }
  }
};
