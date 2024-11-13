import { FlatList, StyleSheet, View } from 'react-native';

import { DATA } from '../../constants';
import Item from './components/Item';
import { colors } from '../../styles/globalStyles';

export default function Task03() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        columnWrapperStyle={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.ebony,
  },
  list: {
    justifyContent: 'space-between',
  },
});
