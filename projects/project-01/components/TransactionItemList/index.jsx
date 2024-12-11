import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function TransactionItemList({ description, value }) {
  return (
    <View style={styles.item}>
      <Text>{description}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.whiteSmoke,
  },
});
