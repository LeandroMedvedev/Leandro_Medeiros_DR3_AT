import { View, Image, Text, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function ImageCard({ title, imageUrl }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    color: colors.white,
    backgroundColor: colors.ebony,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
