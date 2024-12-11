import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import formatCurrency from '../../../../utils';

export default function TransactionItemList({
  currency,
  date,
  description,
  value,
}) {
  return (
    <View style={styles.item}>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.value}>{formatCurrency(currency, value)}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: colors.whiteSmoke,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    color: colors.midnightBlue,
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
});
