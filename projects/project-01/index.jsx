import { createStackNavigator } from '@react-navigation/stack';

import { TransactionListScreen } from './screens';

const Stack = createStackNavigator();

export default function Project01() {
  return (
    <Stack.Navigator initialRouteName='Transactions'>
      <Stack.Screen name='Transactions' component={TransactionListScreen} />
    </Stack.Navigator>
  );
}
