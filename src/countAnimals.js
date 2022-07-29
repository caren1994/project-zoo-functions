const { species } = require('../data/zoo_data');

function countAnimals(animais) {
  if (!animais) {
    return species.reduce((acc, objeto) => {
      acc[objeto.name] = objeto.residents.length;
      return acc;
    }, {});
  }
  const { specie, sex } = animais;
  const { residents } = species.find((animal) => animal.name === specie);
  if (!sex) {
    return residents.length;
  }
  return residents.filter((animal) => animal.sex === sex).length;
}

console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
