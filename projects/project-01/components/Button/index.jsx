import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function Button({ disabled, onPress, title }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : styles.buttonEnabled,
      ]}
      disabled={disabled}
      onPress={onPress}
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
  },
  buttonDisabled: {
    backgroundColor: colors.lightGrey,
  },
  buttonEnabled: {
    backgroundColor: colors.green,
  },
  text: {
    fontWeight: 700,
    textAlign: 'center',
    color: colors.white,
  },
});
