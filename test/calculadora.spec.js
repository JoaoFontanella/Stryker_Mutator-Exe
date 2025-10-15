const { somar, subtrair, dividir, multiplicar } = require('../src/calculadora');

describe('Calculadora', () => {

  // --- Soma ---
  test('soma dois números positivos', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('soma números negativos', () => {
    expect(somar(-2, -3)).toBe(-5);
  });

  test('soma número positivo e negativo', () => {
    expect(somar(5, -3)).toBe(2);
  });

  test('soma com zero', () => {
    expect(somar(5, 0)).toBe(5);
    expect(somar(0, 7)).toBe(7);
  });

  test('soma com decimais', () => {
    expect(somar(2.5, 3.1)).toBeCloseTo(5.6);
  });

  // --- Subtração ---
  test('subtrai dois números positivos', () => {
    expect(subtrair(10, 3)).toBe(7);
  });

  test('subtrai números negativos', () => {
    expect(subtrair(-5, -2)).toBe(-3);
  });

  test('subtrai número positivo e negativo', () => {
    expect(subtrair(5, -3)).toBe(8);
  });

  test('subtrai com zero', () => {
    expect(subtrair(5, 0)).toBe(5);
    expect(subtrair(0, 7)).toBe(-7);
  });

  test('subtrai com decimais', () => {
    expect(subtrair(5.5, 2.2)).toBeCloseTo(3.3);
  });

  // --- Multiplicação ---
  test('multiplica dois números positivos', () => {
    expect(multiplicar(4, 2)).toBe(8);
  });

  test('multiplica números negativos', () => {
    expect(multiplicar(-3, -2)).toBe(6);
  });

  test('multiplica número positivo e negativo', () => {
    expect(multiplicar(3, -2)).toBe(-6);
  });

  test('multiplica por zero', () => {
    expect(multiplicar(5, 0)).toBe(0);
    expect(multiplicar(0, 7)).toBe(0);
  });

  test('multiplica com decimais', () => {
    expect(multiplicar(2.5, 2)).toBeCloseTo(5);
  });

  // --- Divisão ---
  test('divide dois números positivos', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('divide números negativos', () => {
    expect(dividir(-6, -2)).toBe(3);
  });

  test('divide número positivo e negativo', () => {
    expect(dividir(6, -2)).toBe(-3);
  });

  test('divide com decimais', () => {
    expect(dividir(5.5, 2)).toBeCloseTo(2.75);
  });

  test('lança erro ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida');
  });
});