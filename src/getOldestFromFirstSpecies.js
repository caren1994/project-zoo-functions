const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalPeloId = employees.find((pessoa) => pessoa.id === id)
    .responsibleFor[0];
  const animal1 = species.filter((animal) => animal.id === animalPeloId);
  const maisVelho = animal1[0].residents.reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    }
    return curr;
  });

  const { name, sex, age } = maisVelho;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
