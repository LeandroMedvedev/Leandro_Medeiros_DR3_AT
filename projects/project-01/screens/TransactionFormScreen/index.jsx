import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../components';
import { colors } from '../../../../styles/globalStyles';

export default function TransactionFormScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Transação</Text>
      <Button
        title='TRANSAÇÕES'
        navigation={navigation}
        navText='TransactionList'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ebony,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
});
