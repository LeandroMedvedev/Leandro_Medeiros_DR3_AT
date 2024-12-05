import { createStackNavigator } from '@react-navigation/stack';

import { QuizScreen, ResultScreen } from './screens';

const Stack = createStackNavigator();

export default function Task05() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Quiz'
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Result'
        component={ResultScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
