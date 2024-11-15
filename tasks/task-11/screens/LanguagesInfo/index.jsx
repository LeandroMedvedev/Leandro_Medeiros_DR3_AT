import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function LanguagesInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idiomas</Text>
      <Text style={styles.language}>Português - Nativo</Text>
      <Text style={styles.language}>Inglês - Técnico</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.ebony,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  language: {
    fontSize: 18,
    marginTop: 10,
    color: colors.white,
  },
});
