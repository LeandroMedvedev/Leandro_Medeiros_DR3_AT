import { createContext, useContext, useState } from 'react';

import { TRANSACTIONS } from '../../../constants';

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState(TRANSACTIONS);

  const addTransaction = (transaction) =>
    setTransactions((prev) => [...prev, transaction]);

  return (
    <TransactionContext.Provider value={{ addTransaction, transactions }}>
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
