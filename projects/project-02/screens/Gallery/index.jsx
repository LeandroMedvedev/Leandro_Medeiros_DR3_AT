import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { colors } from '../../../../styles/globalStyles.js';
import { fetchImagesByAstro } from '../../api';
import { ImageCard } from '../../components';

export default function GalleryScreen() {
  const [astro, setAstro] = useState('pluto');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderItem = ({ item }) => (
    <ImageCard
      description={item.description}
      imageUrl={item.imageUrl}
      title={item.title}
    />
  );

  useEffect(() => {
    loadImages();
  }, [astro]);

  const loadImages = async () => {
    setLoading(true);
    try {
      const data = await fetchImagesByAstro(astro);
      setImages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria de Imagens da NASA</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o nome do astro (ex: moon, mars)'
        value={astro}
        onChangeText={setAstro}
      />
      {loading ? (
        <ActivityIndicator size='large' color='#0000ff' />
      ) : (
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    backgroundColor: colors.ebony,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: colors.white,
  },
  input: {
    width: 275,
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    color: colors.midnightBlue,
    backgroundColor: colors.white,
  },
});
