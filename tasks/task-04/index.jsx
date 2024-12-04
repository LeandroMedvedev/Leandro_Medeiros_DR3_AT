import { StyleSheet, View } from 'react-native';

import { CategorizedListScreen } from './screens';

export default function Task04() {
  return (
    <View style={styles.container}>
      <CategorizedListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
