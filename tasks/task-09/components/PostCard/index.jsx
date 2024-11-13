import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';

export default function PostCard({ post, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.summary}>{post.summary}</Text>

      <View style={styles.interactions}>
        <Text style={styles.text}>Curtidas: {post.likes}</Text>
        <Text style={styles.text}>Compartilhamentos: {post.shares}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: 280,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: colors.lavenderBlush,
  },
  interactions: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    textIndent: 10,
  },
  summary: {
    textIndent: 10,
  },
  text: {
    fontSize: 14,
  },
});
