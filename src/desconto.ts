function arredondarDuasCasas(valor: number): number {
  return Math.round((valor + Number.EPSILON) * 100) / 100;
}

export function calcularValorComDesconto(valorCompra: number): number {
  if (valorCompra < 0) {
    throw new Error('O valor da compra não pode ser negativo');
  }

  let taxaDesconto = 0;

  if (valorCompra >= 200) {
    taxaDesconto = 0.2;
  } else if (valorCompra >= 100) {
    taxaDesconto = 0.1;
  }

  const valorFinal = valorCompra * (1 - taxaDesconto);
  return arredondarDuasCasas(valorFinal);
}