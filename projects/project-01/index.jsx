import { createStackNavigator } from '@react-navigation/stack';

import { TransactionProvider } from './contexts/index.jsx';
import {
  AuthenticationScreen,
  EditTransactionScreen,
  TransactionFormScreen,
  TransactionListScreen,
} from './screens';

const Stack = createStackNavigator();

export default function Project01() {
  return (
    <TransactionProvider>
      <Stack.Navigator initialRouteName='Authentication'>
        <Stack.Screen
          name='Authentication'
          component={AuthenticationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='TransactionList'
          component={TransactionListScreen}
          options={{ title: 'Transações Financeiras' }}
        />
        <Stack.Screen
          name='TransactionForm'
          component={TransactionFormScreen}
          options={{ title: 'Transação' }}
        />
        <Stack.Screen
          name='EditTransaction'
          component={EditTransactionScreen}
          options={{ title: 'Transação' }}
        />
      </Stack.Navigator>
    </TransactionProvider>
  );
}
