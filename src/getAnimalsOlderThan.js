const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find((especie) => especie.name === animal);
  return residents.every((animais) => animais.age >= age);
}

module.exports = getAnimalsOlderThan;
