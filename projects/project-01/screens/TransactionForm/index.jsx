import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useTransaction } from '../../contexts/index.jsx';
import { colors } from '../../../../styles/globalStyles';
import { ExchangeService } from '../../api';
import { Button } from '../../components';

export default function TransactionFormScreen({ navigation }) {
  const { addTransaction } = useTransaction();

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('Receita');
  const [currency, setCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const data = await ExchangeService.getCurrencies();
      setCurrencies(data);
    };

    fetchCurrencies();
  }, []);

  const handleSubmit = () => {
    if (description && value && date && time && category) {
      const transaction = {
        id: uuidv4(),
        description,
        value: parseFloat(value),
        date,
        time,
        category,
        type,
        currency,
      };
      addTransaction(transaction);
      alert('Transação adicionada com sucesso!');
      navigation.navigate('TransactionList');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Transação</Text>

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
        placeholder='Data (aaaa-mm-dd)'
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder='Hora (hh:mm)'
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
