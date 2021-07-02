const fsp = require('fs').promises;
const { join } = require('path');

const jsonPath = join(__dirname, 'db', 'cars.json');

const getList = async () => {
  const content = await fsp.readFile(jsonPath, 'utf8');
  return JSON.parse(content);
};

const get = async (id = 0) => {
  const list = await getList();
  return list.find(item => item.id === id);
};

module.exports = Object.freeze({
  get,
});