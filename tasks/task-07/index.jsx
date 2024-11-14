import { FlatList, StyleSheet, View } from 'react-native';

import { DATA } from '../../constants';
import Item from './components/Item/index.jsx';
import { colors } from '../../styles/globalStyles';

export default function Task07() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ebony,
    padding: 16,
  },
  list: {
    flex: 1,
    gap: 15,
    justifyContent: 'flex-end',
  },
});
