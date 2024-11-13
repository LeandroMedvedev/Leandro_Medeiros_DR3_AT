import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../styles/globalStyles';

export default function PostDetailsScreen({ route }) {
  const { post } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.meta}>
        <Text style={styles.metaText}>Curtidas: {post.likes}</Text>
        <Text style={styles.metaText}>Compartilhamentos: {post.shares}</Text>
      </View>
      <Text style={styles.content}>{post.text}</Text>
      <Text style={styles.author}>Autor: {post.author}</Text>
      <Text style={styles.date}>Postado em: {post.date}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.ebony,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.white,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  metaText: {
    fontSize: 14,
    color: '#555',
    color: colors.lightGrey,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    color: colors.white,
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    color: colors.white,
  },
  date: {
    fontSize: 12,
    color: colors.lightGrey,
  },
});
