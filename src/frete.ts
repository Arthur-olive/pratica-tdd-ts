export function calcularFrete(valorCompra: number): number {
  if (valorCompra < 0) {
    throw new Error('O valor da compra não pode ser negativo');
  }

  if (valorCompra < 100) {
    return 20;
  }

  if (valorCompra < 200) {
    return 10;
  }

  return 0;
}