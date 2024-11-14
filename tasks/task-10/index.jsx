import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart, ProductList } from './screens';
import { CartProvider } from '../../contexts';
import { CartIcon } from './components';

const Stack = createNativeStackNavigator();

export default function Task10() {
  return (
    <CartProvider>
      <Stack.Navigator>
        <Stack.Screen
          name='ProductList'
          component={ProductList}
          options={({ navigation }) => ({
            title: 'Produtos',
            headerRight: () => (
              <CartIcon onPress={() => navigation.navigate('Cart')} />
            ),
          })}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ title: 'Carrinho' }}
        />
      </Stack.Navigator>
    </CartProvider>
  );
}
