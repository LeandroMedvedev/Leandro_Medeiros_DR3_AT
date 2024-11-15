import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../../styles/globalStyles';
import {
  AcademicInfo,
  ExperienceInfo,
  LanguagesInfo,
  PersonalInfo,
  SkillsInfo,
} from './screens';

const Tab = createBottomTabNavigator();

export default function Task11() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Pessoal':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Acadêmico':
              iconName = focused ? 'school' : 'school-outline';
              break;
            case 'Experiência':
              iconName = focused ? 'briefcase' : 'briefcase-outline';
              break;
            case 'Idiomas':
              iconName = focused ? 'language' : 'language-outline';
              break;
            case 'Habilidades':
              iconName = focused ? 'star' : 'star-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: colors.darkBlue,
        tabBarInactiveTintColor: colors.shuttleGrey,
      })}
    >
      <Tab.Screen name='Pessoal' component={PersonalInfo} />
      <Tab.Screen name='Acadêmico' component={AcademicInfo} />
      <Tab.Screen name='Experiência' component={ExperienceInfo} />
      <Tab.Screen name='Habilidades' component={SkillsInfo} />
      <Tab.Screen name='Idiomas' component={LanguagesInfo} />
    </Tab.Navigator>
  );
}
