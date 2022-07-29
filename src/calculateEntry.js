const { prices } = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const objectFinal = { child: 0, adult: 0, senior: 0 };
  const criancas = entrants.filter((pessoa) => pessoa.age < 18).length;
  const adulto = entrants.filter(
    (pessoa) => pessoa.age >= 18 && pessoa.age < 50,
  ).length;
  const melhorIdade = entrants.filter((pessoa) => pessoa.age >= 50).length;
  objectFinal.child = criancas;
  objectFinal.adult = adulto;
  objectFinal.senior = melhorIdade;
  return objectFinal;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const retornodaFuncao = countEntrants(entrants);

  const valorAdulto = prices.adult * retornodaFuncao.adult;
  const valorCrianca = prices.child * retornodaFuncao.child;
  const valorSenior = prices.senior * retornodaFuncao.senior;
  return valorAdulto + valorCrianca + valorSenior;
}

module.exports = { calculateEntry, countEntrants };
