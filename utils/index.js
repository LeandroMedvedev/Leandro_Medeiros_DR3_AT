export function formatCurrency(currency, value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency });
}

export function filteredTransactions(searchText, sortProperty, transactions) {
  return transactions
    .filter((transaction) =>
      transaction.description.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortProperty === 'value') return b.value - a.value;

      return new Date(b.date) - new Date(a.date);
    });
}
