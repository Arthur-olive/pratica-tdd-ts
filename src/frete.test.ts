import { describe, it, expect } from 'vitest';
import { calcularFrete } from './frete';

describe('Cálculo de frete', () => {
  it('deve cobrar R$ 20 de frete para compras abaixo de R$ 100', () => {
    expect(calcularFrete(50)).toBe(20);
    expect(calcularFrete(99.99)).toBe(20);
  });

  it('deve cobrar R$ 10 de frete para compras de R$ 100 até menos de R$ 200', () => {
    expect(calcularFrete(100)).toBe(10);
    expect(calcularFrete(199.99)).toBe(10);
  });

  it('deve conceder frete grátis (R$ 0) para compras a partir de R$ 200', () => {
    expect(calcularFrete(200)).toBe(0);
    expect(calcularFrete(350)).toBe(0);
  });

  it('deve lançar erro para valores negativos', () => {
    expect(() => calcularFrete(-1)).toThrowError('O valor da compra não pode ser negativo');
  });
});