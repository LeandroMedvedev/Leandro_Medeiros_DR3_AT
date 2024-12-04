import { FlatList, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import { TO_DO } from '../../../../constants';
import { ListItem } from '../../components';

export default function TaskListScreen() {
  const renderItem = ({ item }) => <ListItem item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas (FLAT LIST)</Text>
      <FlatList
        data={TO_DO}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />
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
  flatList: {
    paddingVertical: 10,
  },
});
