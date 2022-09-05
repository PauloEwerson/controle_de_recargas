const dataService = require('../services/getData');

const ERROR_MESSAGE = 'Server error';

const getData = async (_req, res) => {
  try {
    const resultData = await dataService.getData();
    if (resultData.message) {
      return res.status(400).json(resultData);
    }

    return res.status(200).json({ data: resultData });
  } catch (error) { 
    console.log(error);
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  getData,
};