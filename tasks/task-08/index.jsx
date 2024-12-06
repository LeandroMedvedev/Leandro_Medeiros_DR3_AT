import { SafeAreaView, StyleSheet } from 'react-native';

import { colors } from '../../styles/globalStyles';
import { ProductListScreen } from './screens';

export default function Task08() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ebony,
  },
});
