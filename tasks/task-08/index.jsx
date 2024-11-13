import { FlatList, StyleSheet, View } from 'react-native';

import { DATA } from '../../constants';
import { colors, globalStyles } from '../../styles/globalStyles';
import { Card } from './components';

export default function Task08() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={DATA}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            avatar={item.avatar}
            name={item.name}
            address={item.address}
            cellPhone={item.cellPhone}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.ebony,
  },
  list: {
    padding: 20,
    gap: 15,
  },
});
