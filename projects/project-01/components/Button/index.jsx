import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function Button({ navigation, navText, title }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(navText)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    padding: 13,
    borderRadius: 4,
    backgroundColor: colors.green,
  },
  text: {
    fontWeight: 700,
    textAlign: 'center',
    color: colors.white,
  },
});
