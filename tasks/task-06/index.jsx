import { SafeAreaView, StyleSheet } from 'react-native';

import ProductListScreen from './screens/ProductListScreen';
import { colors } from '../../styles/globalStyles';

export default function Task06() {
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
