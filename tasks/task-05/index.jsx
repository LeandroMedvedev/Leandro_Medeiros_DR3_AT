import { FlatList, StyleSheet, View } from 'react-native';

import { DATA } from '../../constants';
import Item from './components/Item/index.jsx';
import { colors } from '../../styles/globalStyles';

export default function Task05() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={DATA}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
    backgroundColor: colors.ebony,
  },
  list: {
    gap: 15,
  },
});
