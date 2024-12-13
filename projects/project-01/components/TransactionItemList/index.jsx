import { useEffect, useState } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import { formatCurrency } from '../../../../utils';
import { useTransaction } from '../../contexts';

export default function TransactionItemList({
  description,
  navigation,
  category,
  currency,
  value,
  date,
  time,
  type,
  id,
}) {
  const [isPortrait, setIsPortrait] = useState(true);
  const { deleteTransaction } = useTransaction();

  const handleEdit = () => {
    navigation.navigate('EditTransaction', {
      transaction: {
        id,
        description,
        category,
        currency,
        value,
        date,
        time,
        type,
      },
    });
  };

  const handleDelete = () => {
    deleteTransaction(id);
  };

  const renderLeftActions = () => (
    <Pressable style={[styles.action, styles.edit]} onPress={handleEdit}>
      <Text style={styles.actionText}>Editar</Text>
    </Pressable>
  );

  const renderRightActions = () => (
    <Pressable style={[styles.action, styles.delete]} onPress={handleDelete}>
      <Text style={styles.actionText}>Excluir</Text>
    </Pressable>
  );

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
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      <View style={styles.item}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.value}>
          Valor: {formatCurrency(currency, value)}
        </Text>
        <Text style={styles.date}>Data: {date}</Text>
        {!isPortrait && (
          <>
            <Text style={styles.additional}>Hora: {time}</Text>
            <Text style={styles.additional}>Categoria: {category}</Text>
            <Text style={styles.additional}>Tipo: {type}</Text>
            <Text style={styles.additional}>Moeda: {currency}</Text>
          </>
        )}
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 15,
    borderRadius: 4,
    marginVertical: 8,
    backgroundColor: colors.whiteSmoke,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    marginVertical: 5,
    color: colors.midnightBlue,
  },
  date: {
    fontSize: 12,
    color: colors.midnightBlue,
  },
  additional: {
    fontSize: 12,
    marginTop: 5,
    color: colors.midnightBlue,
  },
  action: {
    width: 80,
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    backgroundColor: colors.ciano,
  },
  delete: {
    backgroundColor: colors.darkRed,
  },
  actionText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
