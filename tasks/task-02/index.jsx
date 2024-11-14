import { FlatList, StyleSheet, View } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';
import { DATA } from '../../constants';
import Item from './components/Item/index.jsx';

export default function Task02() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          horizontal
          data={DATA}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Item imgUrl={item.imgUrl} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  list: {
    gap: 15,
  },
});
