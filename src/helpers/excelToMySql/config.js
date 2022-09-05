require('dotenv').config();
const excelConverter = require('./convert');

const generateOutput = (error, resultIsError, results) => {
  if (error) {
    if (resultIsError) {
      console.log('\x1b[36m%s\x1b[0m', 'Passed!');
    } else {
      throw error;
    }
  } else if (resultIsError) {
      throw new Error('Failure! No error detected');
    } else {
      console.log(results);
      console.log('\x1b[36m%s\x1b[0m', 'Passed!');
    }
};

const file = async (data, options, resultIsError = false) => {
  try {
    await excelConverter.convertToFile(data, options, (error, results) => {
      if (!error) generateOutput(error, resultIsError, results);
    });
  } catch (error) {
    generateOutput(error, resultIsError, null);
  }
};

 const mysql = async (data, options, resultIsError = false) => {
  try {
    await excelConverter.covertToMYSQL(data, options, (error, results) => {
      if (!error) generateOutput(error, resultIsError, results);
    });
  } catch (error) {
    generateOutput(error, resultIsError, null);
  }
};

const initialData = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  pass: process.env.MYSQL_PASSWORD,
  path: process.env.PATH_TO_CSV,
  table: process.env.TABLE_CONVERT,
  db: process.env.MYSQL_DB_NAME,
  endConnection: true,
};

const initialOptions = {
  customStartEnd: false,
  startRow: 1,
  startCol: 1,
  endRow: 100,
  endCol: 10,
  autoId: true,
  destination: '',
};

(async function beginTest() {
  // Sanity test for the end result
  await file(initialData, initialOptions);
  await mysql(initialData, initialOptions);

  // Authentication Error Test
  initialData.pass = undefined;
  await mysql(initialData, initialOptions, true);

  // Invalid Table or Database
  initialData.pass = 'password';
  initialData.db = undefined;
  initialData.table = undefined;
  await mysql(initialData, initialOptions, true);
}());
