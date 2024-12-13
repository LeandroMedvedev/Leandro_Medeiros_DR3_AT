import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function ImageDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Detalhes da Imagem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    backgroundColor: colors.ebony,
  },
});
