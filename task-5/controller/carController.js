const db = require('../db/db');

const getAll = async () => await db.getAll();

module.exports = Object.freeze({
  getAll,
});