const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find(
    (pessoa) =>
      pessoa.firstName === employeeName || pessoa.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;
