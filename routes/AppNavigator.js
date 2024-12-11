import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Project01, Project02, Project03 } from '../projects';
import Home from '../screens/Home.jsx';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Project01'
        component={Project01}
        options={{ headerShown: false, title: 'Projeto 1' }}
      />
      <Stack.Screen
        name='Project02'
        component={Project02}
        options={{ title: 'Projeto 2' }}
      />
      <Stack.Screen
        name='Project03'
        component={Project03}
        options={{ title: 'Projeto 3' }}
      />
    </Stack.Navigator>
  );
}
