import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function ResultScreen({ route, navigation }) {
  const { score, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz finalizado! 😊</Text>
      <Text style={styles.score}>
        Você acertou {score} de {total} questões!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ebony,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.white,
  },
  score: {
    fontSize: 18,
    marginBottom: 20,
    color: colors.white,
  },
  button: {
    backgroundColor: colors.ciano,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});
