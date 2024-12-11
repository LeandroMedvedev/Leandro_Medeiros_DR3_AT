export default function formatCurrency(currency, value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency });
}
