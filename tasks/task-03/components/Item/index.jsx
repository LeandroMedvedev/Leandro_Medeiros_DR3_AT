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
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: colors.lightGrey,
  },
  title: {
    fontSize: 22,
  },
});
