import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function SectionHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.darkAubergine,
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
});
