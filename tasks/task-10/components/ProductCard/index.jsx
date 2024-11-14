import { Button, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import formatCurrency from '../../../../utils';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.text}>{product.description}</Text>
      <Text style={styles.text}>{formatCurrency(product.price)}</Text>
      <Button
        color={colors.githubGreen}
        title='Adicionar'
        onPress={onAddToCart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    minWidth: 310,
    maxWidth: 600,
    marginVertical: 5,
    borderColor: colors.white,
    borderRadius: 5,
    gap: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.white,
  },
  text: {
    color: colors.white,
  },
});
