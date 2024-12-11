import { StyleSheet, Text, View } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

export default function Project02() {
  return (
    <View style={globalStyles.container}>
      <Text>Projeto 02</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
