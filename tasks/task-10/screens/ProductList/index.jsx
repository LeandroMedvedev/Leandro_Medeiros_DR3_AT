import { FlatList, StyleSheet, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import { PRODUCTS } from '../../../../constants';
import { ProductCard } from '../../components';
import { useCart } from '../../../../contexts';

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onAddToCart={() => addToCart(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.ebony,
  },
  list: {
    gap: 15,
  },
});
