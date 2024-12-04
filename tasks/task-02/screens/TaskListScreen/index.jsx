import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import { TO_DO } from '../../../../constants';
import { ListItem } from '../../components';

export default function TaskListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas (MAP)</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {TO_DO.map((task, index) => (
          <ListItem key={index} item={task} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.ebony,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: colors.white,
  },
  scrollView: {
    paddingVertical: 10,
  },
});
