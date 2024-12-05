import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function Question({ question, options, onAnswer }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => onAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.white,
  },
  option: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    color: colors.white,
    backgroundColor: colors.midnightBlue,
  },
  optionText: {
    fontSize: 16,
    color: colors.white,
  },
});
