const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const isManagerfunc = isManager(managerId);
  if (isManagerfunc === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const manager = employees.filter((element) => element.managers.includes(managerId)).map(
    (element) => `${element.firstName} ${element.lastName}`,
  );
  return manager;
}

module.exports = { isManager, getRelatedEmployees };
