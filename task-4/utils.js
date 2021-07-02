const fsp = require('fs').promises;
const { join } = require('path');

const jsonPath = join(__dirname, 'db', 'cars.json');

const getList = async () => {
  const content = await fsp.readFile(jsonPath, 'utf8');
  return JSON.parse(content);
};

const getAll = async () => {
  return await getList();
};

module.exports = Object.freeze({
  getAll,
});