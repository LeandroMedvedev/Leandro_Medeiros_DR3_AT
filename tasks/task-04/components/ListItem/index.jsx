import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function ListItem({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: colors.midnightBlue,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
});
