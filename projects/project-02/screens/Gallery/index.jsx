import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Text>Galeria de Imagens da NASA</Text>
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
