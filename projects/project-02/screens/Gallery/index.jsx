import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { Bar } from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../../../styles/globalStyles.js';
import { fetchImagesByAstro } from '../../api';
import { ImageCard } from '../../components';

export default function GalleryScreen() {
  const navigation = useNavigation();

  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [astro, setAstro] = useState('earth');
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    resetAndLoadImages();
  }, [astro]);

  useEffect(() => {
    if (totalItems > 0) {
      const progressPercent = Number((images.length / totalItems) * 100);

      setProgress(progressPercent);
    }
  }, [images, totalItems]);

  const resetAndLoadImages = async () => {
    setImages([]);
    setPage(1);
    await loadImages(1);
  };

  const loadImages = async (currentPage) => {
    setLoading(true);
    try {
      const { items, totalItems: total } = await fetchImagesByAstro(
        astro,
        currentPage
      );

      setTimeout(() => {
        if (currentPage === 1) {
          setTotalItems(total);
        }
        setImages((prevImages) => [...prevImages, ...items]);
      }, 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        loadImages(nextPage);
        return nextPage;
      });
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await resetAndLoadImages();
    setRefreshing(false);
  };

  const handleImagePress = (image) => {
    navigation.navigate('ImageDetails', { image });
  };

  const renderItem = ({ item }) => (
    <ImageCard
      author={item.secondary_creator}
      description={item.description}
      imageUrl={item.imageUrl}
      title={item.title}
      onPress={() => handleImagePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria de Imagens da NASA</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o nome do astro (ex: moon, mars)'
        value={astro}
        onChangeText={setAstro}
      />

      <Bar
        progress={progress}
        width={700}
        color={colors.wildSand}
        height={14}
        borderRadius={4}
      />

      {loading && images.length === 0 ? (
        <ActivityIndicator size='large' color={colors.bilobaFlower} />
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={() => uuidv4()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
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
    overflow: 'scroll',
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
