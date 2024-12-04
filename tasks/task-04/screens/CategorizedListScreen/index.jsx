import { SectionList, StyleSheet, View } from 'react-native';

import { ListItem, SectionHeader } from '../../components';
import { CATEGORIZED_LIST } from '../../../../constants';
import { colors } from '../../../../styles/globalStyles';

export default function CategorizedListScreen() {
  const renderItem = ({ item }) => <ListItem item={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <SectionHeader title={title} />
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={CATEGORIZED_LIST}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.sectionList}
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
  sectionList: {
    paddingVertical: 10,
  },
});
