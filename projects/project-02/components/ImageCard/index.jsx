import { View, Image, Text, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import { truncateText } from '../../../../utils';

export default function ImageCard({ description, title, imageUrl }) {
  return (
    <View style={styles.card}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <Text style={styles.noImage}>Imagem não disponível</Text>
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{truncateText(description, 50)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    margin: 10,
    borderRadius: 4,
    overflow: 'hidden',
    color: colors.white,
    backgroundColor: colors.ebony,
  },
  image: {
    height: 200,
    width: '100%',
  },
  noImage: {
    padding: 20,
    textAlign: 'center',
    color: colors.white,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  description: {
    color: colors.white,
    textAlign: 'center',
  },
});
