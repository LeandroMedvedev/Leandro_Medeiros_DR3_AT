import { StyleSheet, Text, View } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

export default function Project01() {
  return (
    <View style={globalStyles.container}>
      <Text>Projeto 01</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
