import { Text, StyleSheet, View, Image } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function ImageDetailsScreen({ route }) {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{image.title}</Text>

      {image.author && <Text style={styles.author}>Autor: {image.author}</Text>}

      <Text style={styles.description}>
        {image.description || 'Descrição não disponível'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    color: colors.white,
    backgroundColor: colors.ebony,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
    color: colors.white,
  },
  author: {
    color: colors.white,
  },
  description: {
    fontSize: 16,
    color: colors.white,
  },
});
