import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function ExperienceInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text style={styles.text}>
        - Programador Júnior | Air Quality Control * Soluções Ambientais
        (07/2023 - 03/2024)
      </Text>
      <Text style={styles.text}>
        - Monitor | Kenzie Academy Brasil (07/2022 - 10/2022)
      </Text>
      <Text style={styles.text}>
        - Recenseador Agropecuário | IBGE (09/2017 - 03/2018)
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
