import { View, Text, Image, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function ProductCard({ name, price, images }) {
  return (
    <View style={styles.card}>
      <View style={styles.imagesContainer}>
        {images.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
        ))}
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 400,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.midnightBlue,
  },
  imagesContainer: {
    width: 316,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  image: {
    width: 145,
    height: 145,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.white,
  },
  price: {
    fontSize: 14,
    color: colors.githubGreen,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
