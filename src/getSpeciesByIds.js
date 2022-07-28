const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrayId = [];
  if (!ids) {
    return [];
  }
  if (ids.length === 1) {
    return species.filter((especie) => especie.id === ids[0]);
  }
  ids.forEach((id) => {
    species.forEach((especie) => {
      if (id === especie.id) {
        arrayId.push(especie);
      }
    });
  });

  return arrayId;
}
console.log(
  getSpeciesByIds(
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
  ),
);

module.exports = getSpeciesByIds;
