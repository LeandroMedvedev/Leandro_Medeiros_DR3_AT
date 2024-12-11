import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles.js';

export default function TransactionListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transaction List Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ebony,
  },
  text: {
    color: colors.white,
  },
});
