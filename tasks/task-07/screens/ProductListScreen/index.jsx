import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Button,
  Text,
} from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import ProductCard from '../../components/ProductCard';
import { fetchProducts } from '../../services';

export default function ProductListScreen() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    }
    loadProducts();
  }, []);

  const handleFilter = () => {
    setIsFiltering(true);

    if (!searchText.trim()) {
      setFilteredProducts(products);
      setIsFiltering(false);
    } else {
      const filtered = products.filter((product) =>
        product.nome.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size='large' color={colors.ciano} />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <ProductCard name={item.nome} price={item.preco} images={item.imagens} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.input}
          placeholder='Digite o nome do produto...'
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button
          color={colors.githubGreen}
          title='Filtrar'
          onPress={handleFilter}
        />
      </View>

      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      ) : isFiltering ? (
        <View style={styles.emptyMessage}>
          <Text style={styles.emptyText}>Nenhum produto encontrado.</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={products}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ebony,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.ebony,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: colors.white,
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
  emptyMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 24,
    color: colors.white,
  },
});
