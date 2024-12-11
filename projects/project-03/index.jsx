import { StyleSheet, Text, View } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

export default function Project03() {
  return (
    <View style={globalStyles.container}>
      <Text>Projeto 03</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
