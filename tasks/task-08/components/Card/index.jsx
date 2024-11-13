import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../styles/globalStyles';

export default function Card({ avatar, name, address, cellPhone }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: avatar }} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{address}</Text>
        <Text style={styles.text}>{cellPhone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.lavenderBlush,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 32,
  },
  text: {
    fontSize: 18,
  },
});
