import { FlatList, StyleSheet, Text, View } from 'react-native';

import { colors, globalStyles } from '../../styles/globalStyles';
import { DATA } from '../../constants';

export default function Task01() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.division}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  division: {
    width: '100vw',
    maxWidth: 700,
    padding: 10,
    borderColor: colors.white,
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.midnightBlue,
  },
  text: {
    fontSize: 24,
    color: colors.white,
  },
});
