import { Image, StyleSheet } from 'react-native';

export default function Item({ imgUrl }) {
  return <Image style={styles.image} source={{ uri: imgUrl }} />;
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
