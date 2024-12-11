import { FlatList, StyleSheet, View } from 'react-native';

import { TRANSACTIONS } from '../../../../constants/index.js';
import { colors } from '../../../../styles/globalStyles.js';
import { TransactionItemList } from '../../components';

export default function TransactionListScreen() {
  const renderItem = ({ item }) => (
    <TransactionItemList
      description={item.description}
      category={item.category}
      currency={item.currency}
      value={item.value}
      date={item.date}
      type={item.type}
      hour={item.hour}
      key={item.id}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={TRANSACTIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ebony,
    padding: 10,
  },
  text: {
    color: colors.white,
  },
});
