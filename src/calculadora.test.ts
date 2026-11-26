import { describe, it, expect } from 'vitest';
import { somar, subtrair, multiplicar, dividir } from './calculadora';

describe('Calculadora de operações', () => {
  it("deve somar dois números corretamente", () => {
    expect(somar(3, 5)).toBe(8);
  });

  it("deve subtrair dois números corretamente", () => {
    expect(subtrair(10, 4)).toBe(6);
  });

  it("deve multiplicar dois números corretamente", () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  it('deve dividir dois números corretamente', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  it('deve lançar erro ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrowError('Divisão por zero');
  });
});