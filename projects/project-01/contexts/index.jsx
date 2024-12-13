import { createContext, useContext, useState } from 'react';

import { TRANSACTIONS } from '../../../constants/index.js';

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState(TRANSACTIONS);

  const addTransaction = (transaction) =>
    setTransactions((prev) => [...prev, transaction]);

  const editTransaction = (updatedTransaction) =>
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );

  const deleteTransaction = (id) =>
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );

  return (
    <TransactionContext.Provider
      value={{
        addTransaction,
        deleteTransaction,
        editTransaction,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);

  if (!context)
    throw new Error('useAppContext must be used within an AppProvider');

  return context;
}
