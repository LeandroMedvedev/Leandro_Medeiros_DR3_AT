import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function AcademicInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>
      <Text style={styles.text}>- Engenharia de Software (2023 - 2026)</Text>
      <Text style={styles.text}>
        - Desenvolvimento Web Full Stack (2021 - 2022)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ebony,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.white,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: colors.white,
  },
});
