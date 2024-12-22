import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import uuid from 'react-native-uuid';
import { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useTransaction } from '../../contexts/index.jsx';
import { colors } from '../../../../styles/globalStyles';
import { ExchangeService } from '../../api';
import { Button } from '../../components';

export default function TransactionFormScreen({ navigation }) {
  const { addTransaction } = useTransaction();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [description, setDescription] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [category, setCategory] = useState('');
  const [type, setType] = useState('Receita');
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchCurrencies = async () => {
      const data = await ExchangeService.getCurrencies();
      setCurrencies(data);
    };

    fetchCurrencies();
  }, []);

  const onDateChange = (event, selectedDate) => {
    if (selectedDate) setDate(selectedDate);
    setShowDatePicker(false);
  };

  const onTimeChange = (event, selectedTime) => {
    if (selectedTime) setTime(selectedTime);
    setShowTimePicker(false);
  };

  const handleSubmit = () => {
    if (description && value && date && time && category) {
      const transaction = {
        id: uuid.v4(),
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
    <SafeAreaView style={styles.container}>
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

      {/* Data */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.inputText}>{date.toLocaleDateString('pt-BR')}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode='date'
          display='default'
          onChange={onDateChange}
        />
      )}

      {/* Hora */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowTimePicker(true)}
      >
        <Text style={styles.inputText}>
          {time.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={time}
          is24Hour
          mode='time'
          display='default'
          onChange={onTimeChange}
        />
      )}

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
        dropdownIconColor={colors.white}
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
    </SafeAreaView>
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
  inputText: {
    color: colors.midnightBlue,
  },
  picker: {
    backgroundColor: colors.white,
    color: colors.midnightBlue,
    borderRadius: 4,
    width: 250,
    height: 45,
    borderRadius: 4,
  },
  dateTimePicker: {
    color: colors.white,
    backgroundColor: colors.ebony,
  },
});
