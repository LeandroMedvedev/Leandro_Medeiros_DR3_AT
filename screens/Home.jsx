import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../styles/globalStyles';
import { PROJECTS } from '../constants';

export default function Home() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.route)}
    >
      <Text style={styles.link}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assessment</Text>
      <Text style={styles.subtitle}>Projetos</Text>

      <FlatList
        data={PROJECTS}
        contentContainerStyle={styles.list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
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
    marginBottom: 10,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: colors.white,
  },
  list: {
    width: '100%',
    marginTop: 40,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    width: 250,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.midnightBlue,
  },
  link: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.white,
  },
});
