import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../styles/globalStyles';

export default function Item({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: colors.white,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.white,
  },
});
