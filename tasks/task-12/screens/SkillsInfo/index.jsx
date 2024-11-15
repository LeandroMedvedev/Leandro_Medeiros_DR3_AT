import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function SkillsInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <Text style={styles.skill}>
        - Desenvolvimento Front-end (React, HTML, CSS, JavaScript)
      </Text>
      <Text style={styles.skill}>
        - Desenvolvimento Back-end (Node.js, JavaScript, Django, Python, .NET,
        C#)
      </Text>
      <Text style={styles.skill}>
        - Banco de Dados (SQL, SQLite, SQL Server, PostgreSQL, MongoDB)
      </Text>
      <Text style={styles.skill}>- Controle de Versão (Git/GitHub)</Text>
      <Text style={styles.skill}>- Metodologias Ágeis (Scrum)</Text>
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
  skill: {
    fontSize: 18,
    marginTop: 10,
    color: colors.white,
  },
});
