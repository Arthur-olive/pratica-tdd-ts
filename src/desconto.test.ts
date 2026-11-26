import { describe, it, expect } from 'vitest';
import { calcularValorComDesconto } from './desconto';

describe('Sistema de descontos', () => {
  it('não deve aplicar desconto para compras abaixo de R$ 100', () => {
    expect(calcularValorComDesconto(50)).toBe(50);
    expect(calcularValorComDesconto(99.99)).toBe(99.99);
  });

  it('deve aplicar 10% de desconto para compras de R$ 100 até menos de R$ 200', () => {
    expect(calcularValorComDesconto(100)).toBe(90);
    expect(calcularValorComDesconto(150)).toBe(135);
  });

  it('deve aplicar 20% de desconto para compras a partir de R$ 200', () => {
    expect(calcularValorComDesconto(200)).toBe(160);
    expect(calcularValorComDesconto(250)).toBe(200);
  });

  it('deve arredondar o valor final para duas casas decimais', () => {
    expect(calcularValorComDesconto(133.33)).toBe(120);
    expect(calcularValorComDesconto(111.11)).toBe(100);
  });

  it('deve lançar erro para valores negativos', () => {
    expect(() => calcularValorComDesconto(-10)).toThrowError('O valor da compra não pode ser negativo');
  });
});