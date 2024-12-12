import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import formatCurrency from '../../../../utils';

export default function TransactionItemList({
  category,
  currency,
  date,
  description,
  hour,
  type,
  value,
}) {
  const [isPortrait, setIsPortrait] = useState(true);

  const detectOrientation = () => {
    const { height, width } = Dimensions.get('window');
    setIsPortrait(height >= width);
  };

  useEffect(() => {
    detectOrientation();

    const subscription = Dimensions.addEventListener(
      'change',
      detectOrientation
    );

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.item}>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.value}>Valor: {formatCurrency(currency, value)}</Text>
      <Text style={styles.date}>Data: {date}</Text>

      {!isPortrait && (
        <>
          <Text style={styles.additional}>Hora: {hour}</Text>
          <Text style={styles.additional}>Categoria: {category}</Text>
          <Text style={styles.additional}>Tipo: {type}</Text>
          <Text style={styles.additional}>Moeda: {currency}</Text>
        </>
      )}
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
    color: colors.midnightBlue,
  },
  additional: {
    fontSize: 12,
    color: colors.midnightBlue,
    marginTop: 5,
  },
});
