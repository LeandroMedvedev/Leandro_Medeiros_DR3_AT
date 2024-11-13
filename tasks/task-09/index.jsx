import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PostDetailsScreen, PostListScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function Task09() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='PostList'
        component={PostListScreen}
        options={{ title: 'Postagens' }}
      />
      <Stack.Screen
        name='PostDetails'
        component={PostDetailsScreen}
        options={{ title: 'Postagem' }}
      />
    </Stack.Navigator>
  );
}
