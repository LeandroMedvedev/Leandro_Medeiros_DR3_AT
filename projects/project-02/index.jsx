import { createStackNavigator } from '@react-navigation/stack';

import { GalleryScreen, ImageDetailsScreen } from './screens';

const Stack = createStackNavigator();

export default function Project02() {
  return (
    <Stack.Navigator initialRouteName='Gallery'>
      <Stack.Screen
        name='Gallery'
        component={GalleryScreen}
        options={{ options: 'Galeria' }}
      />
      <Stack.Screen
        name='ImageDetails'
        component={ImageDetailsScreen}
        options={{ title: 'Imagem' }}
      />
    </Stack.Navigator>
  );
}
