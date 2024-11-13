import { FlatList, StyleSheet, View } from 'react-native';

import { globalStyles } from '../../../styles/globalStyles';
import { PostCard } from '../components';

export default function PostsScreen({ posts }) {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PostCard
            heading={item.heading}
            summary={item.summary}
            likes={item.likes}
            sharing={item.sharing}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
    gap: 15,
  },
});
