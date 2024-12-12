import { createStackNavigator } from '@react-navigation/stack';

import { TransactionProvider } from './contexts';
import {
  AuthenticationScreen,
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
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name='TransactionList'
          component={TransactionListScreen}
          options={{ title: 'Transações Financeiras' }}
        />
        <Stack.Screen
          name='TransactionForm'
          component={TransactionFormScreen}
          options={{ title: 'Inserir Transação' }}
        />
      </Stack.Navigator>
    </TransactionProvider>
  );
}
