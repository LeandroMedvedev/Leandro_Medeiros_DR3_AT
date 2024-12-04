import { StyleSheet, View } from 'react-native';

import { TaskListScreen } from './screens';

export default function Task02() {
  return (
    <View style={styles.container}>
      <TaskListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
