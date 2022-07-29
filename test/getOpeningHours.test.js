const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {});
test('verifica , se passados os argumentos retorna mensagem de zoo fechado', () => {
  expect(getOpeningHours('monday', '09:00-Am')).toEqual('The zoo is closed');
});
test('verifica , se passados os argumentos retorna mensagem de zoo aberto', () => {
  expect(getOpeningHours('tuesday', '09:00-Am')).toEqual('The zoo is open');
});
test('verifica , se passados os argumentos retorna mensagem de zoo fechado', () => {
  expect(getOpeningHours('wednesday', '09:00-Pm')).toEqual('The zoo is closed');
});
