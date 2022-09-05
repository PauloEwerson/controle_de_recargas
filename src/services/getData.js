const { Data } = require('../database/models');

const getData = async () => {
  const data = await Data.findAll();
  if (data.length === 0) {
    return { message: 'Sem dados cadastrados' };
  }
  return data;
};

module.exports = {
  getData,
};