const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {});
test('Caso não haja parâmetro ,retorna undefined',()=>{
    expect(handlerElephants()).toBeUndefined();
});
test('verifica , se o parâmetro é uma string',()=>{
    expect(handlerElephants(56)).toEqual('Parâmetro inválido, é necessário uma string');
});
test('verifica , se o parâmetro é uma string',()=>{
    expect(handlerElephants(56)).toEqual('Parâmetro inválido, é necessário uma string');
});
test('verifica a quantidade da população dos elefantes',()=>{
    expect(handlerElephants('popularity')).toBe(5);
});
test('verifica , se o parâmetro é uma string',()=>{
    expect(handlerElephants('count')).toBe(4);
});
test('verifica , se existe um elefante com nome de jefferson',()=>{
    expect(handlerElephants('names')).toContain('Jefferson');
});
test('verifica , se a média de idade é ',()=>{
    expect(handlerElephants('averageAge')).toContain('10.5');
});



