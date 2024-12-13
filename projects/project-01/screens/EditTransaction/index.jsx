import { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useTransaction } from '../../contexts/index.jsx';
import { colors } from '../../../../styles/globalStyles';
import { ExchangeService } from '../../api';
import { Button } from '../../components';

export default function EditTransactionScreen({ route, navigation }) {
  const { editTransaction } = useTransaction();
  const { transaction } = route.params;

  const [description, setDescription] = useState(
    transaction?.description || ''
  );
  const [value, setValue] = useState(transaction?.value || '');
  const [date, setDate] = useState(transaction?.date || '');
  const [time, setTime] = useState(transaction?.time || '');
  const [category, setCategory] = useState(transaction?.category || '');
  const [type, setType] = useState(transaction?.type || '');
  const [currency, setCurrency] = useState(transaction?.currency || '');
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const data = await ExchangeService.getCurrencies();
      setCurrencies(data);
    };

    fetchCurrencies();
  }, []);

  const handleSubmit = () => {
    if (description && value && date && time && category && type && currency) {
      const newTransaction = {
        id: transaction.id,
        description,
        value: parseFloat(value),
        date,
        time,
        category,
        type,
        currency,
      };

      editTransaction(newTransaction);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Transação</Text>

      <TextInput
        style={styles.input}
        placeholder='Descrição'
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder='Valor'
        keyboardType='numeric'
        value={value}
        onChangeText={setValue}
      />

      <TextInput
        style={styles.input}
        placeholder='Data (AAAA-MM-DD)'
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder='Hora (HH:MM)'
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={styles.input}
        placeholder='Categoria'
        value={category}
        onChangeText={setCategory}
      />

      <Picker
        style={styles.picker}
        selectedValue={type}
        onValueChange={setType}
      >
        <Picker.Item label='Receita' value='Receita' />
        <Picker.Item label='Despesa' value='Despesa' />
      </Picker>

      <Picker
        style={styles.picker}
        selectedValue={currency}
        onValueChange={setCurrency}
      >
        {currencies.map((curr) => (
          <Picker.Item
            key={curr.simbolo}
            label={`${curr.nomeFormatado} (${curr.simbolo})`}
            value={curr.simbolo}
          />
        ))}
      </Picker>

      <Button
        title='SALVAR'
        onPress={handleSubmit}
        disabled={!description || !value || !time || !date || !category}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ebony,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
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
});
