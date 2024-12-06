import {
  ActivityIndicator,
  Button,
  FlatList,
  Picker,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';

import { colors } from '../../../../styles/globalStyles';
import { ProductCard } from '../../components';
import { fetchProducts } from '../../services';

export default function ProductListScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
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
      const filtered = products.filter(
        (product) =>
          product.nome.toLowerCase().includes(searchText.toLowerCase()) ||
          product.descricao.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) => {
      switch (order) {
        case 'name-asc':
          return a.nome.localeCompare(b.nome);
        case 'name-desc':
          return b.nome.localeCompare(a.nome);
        case 'price-asc':
          return a.preco - b.preco;
        case 'price-desc':
          return b.preco - a.preco;
        default:
          return 0;
      }
    });
    setFilteredProducts(sorted);
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

      <View style={styles.sortContainer}>
        <Text style={styles.sortText}>Ordenar por nome:</Text>
        <Picker
          selectedValue={sortOrder}
          style={styles.picker}
          onValueChange={(itemValue) => {
            if (itemValue && itemValue !== 'Selecione uma opção')
              handleSort(itemValue);

            setSortOrder(itemValue);
          }}
        >
          <Picker.Item label='Selecione uma opção' value={null} />
          <Picker.Item label='Nome (Crescente)' value='name-asc' />
          <Picker.Item label='Nome (Decrescente)' value='name-desc' />
          <Picker.Item label='Preço (Crescente)' value='price-asc' />
          <Picker.Item label='Preço (Decrescente)' value='price-desc' />
        </Picker>
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
    borderBottomWidth: 1,
    backgroundColor: colors.ebony,
    borderBottomColor: colors.white,
  },
  input: {
    flex: 1,
    maxWidth: 300,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: colors.white,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: colors.ebony,
    borderBottomColor: colors.white,
  },
  sortText: {
    color: colors.white,
    fontSize: 16,
  },
  picker: {
    padding: 7,
    maxWidth: 300,
    marginLeft: 10,
    borderRadius: 5,
    flex: 1,
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
