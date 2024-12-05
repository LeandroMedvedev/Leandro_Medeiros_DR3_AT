import { View, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function ProgressBar({ progress, total }) {
  const percentage = (progress / total) * 100;

  return (
    <View style={styles.container}>
      <View style={{ ...styles.bar, width: `${percentage}%` }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: colors.ciano,
  },
});
