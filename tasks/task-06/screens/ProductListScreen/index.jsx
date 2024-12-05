import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import ProductCard from '../../components/ProductCard';
import { fetchProducts } from '../../services';

export default function ProductListScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size='large' color='#4caf50' />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <ProductCard name={item.nome} price={item.preco} images={item.imagens} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ebony,
  },
  list: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
