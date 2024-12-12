import { FlatList, StyleSheet, View } from 'react-native';

import { Button, TransactionItemList } from '../../components';
import { TRANSACTIONS } from '../../../../constants/index.js';
import { colors } from '../../../../styles/globalStyles.js';

export default function TransactionListScreen({ navigation }) {
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
      <Button
        navigation={navigation}
        navText='TransactionForm'
        title='ADICIONAR'
      />
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
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ebony,
  },
  text: {
    color: colors.white,
  },
});
