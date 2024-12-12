import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';

import { Button, TransactionItemList } from '../../components';
import { colors } from '../../../../styles/globalStyles.js';
import { useTransaction } from '../../contexts/index.jsx';
import { filteredTransactions } from '../../../../utils';

export default function TransactionListScreen({ navigation }) {
  const { transactions: TRANSACTIONS } = useTransaction();

  const [sortProperty, setSortProperty] = useState('date');
  const [searchText, setSearchText] = useState('');
  const [transactions, _] = useState(TRANSACTIONS);

  const renderItem = ({ item }) => (
    <TransactionItemList
      description={item.description}
      category={item.category}
      currency={item.currency}
      value={item.value}
      date={item.date}
      type={item.type}
      time={item.time}
      key={item.id}
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        placeholder='Filtrar por descrição'
        onChangeText={(text) => setSearchText(text)}
      />

      <Picker
        style={styles.picker}
        selectedValue={sortProperty}
        onValueChange={(itemValue) => setSortProperty(itemValue)}
      >
        <Picker.Item label='Ordenar por data' value='date' />
        <Picker.Item label='Ordenar por valor' value='value' />
      </Picker>

      <Button
        onPress={() => navigation.navigate('TransactionForm')}
        title='ADICIONAR'
      />

      <FlatList
        data={filteredTransactions(searchText, sortProperty, transactions)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ebony,
  },
  input: {
    width: 250,
    padding: 12,
    borderRadius: 4,
    color: colors.midnightBlue,
    backgroundColor: colors.white,
  },
  picker: {
    width: 250,
    height: 45,
    borderRadius: 4,
  },
  noTransaction: {
    fontSize: 24,
    color: colors.white,
  },
});