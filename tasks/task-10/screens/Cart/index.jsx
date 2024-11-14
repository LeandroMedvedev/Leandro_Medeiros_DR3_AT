import { FlatList, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import { useCart } from '../../../../contexts';
import formatCurrency from '../../../../utils';

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>Quantidade: {item.quantity}</Text>
            <Text style={styles.text}>
              {formatCurrency(item.price * item.quantity)}
            </Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: {formatCurrency(total)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.ebony,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  total: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
    color: colors.white,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  text: {
    color: colors.white,
  },
});
