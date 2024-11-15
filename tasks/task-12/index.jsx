import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  AcademicInfo,
  ExperienceInfo,
  LanguagesInfo,
  PersonalInfo,
  SkillsInfo,
} from './screens';
import { colors } from '../../styles/globalStyles';

const Drawer = createDrawerNavigator();

export default function Task12() {
  return (
    <Drawer.Navigator
      initialRouteName='Pessoal'
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
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

        drawerActiveTintColor: colors.darkBlue,
        drawerInactiveTintColor: colors.shuttleGrey,
        drawerStyle: {
          backgroundColor: '#f0f0f0',
        },
        headerStyle: {
          backgroundColor: '#f0f0f0',
        },
        headerTintColor: colors.midnightBlue,
      })}
    >
      <Drawer.Screen name='Pessoal' component={PersonalInfo} />
      <Drawer.Screen name='Acadêmico' component={AcademicInfo} />
      <Drawer.Screen name='Experiência' component={ExperienceInfo} />
      <Drawer.Screen name='Habilidades' component={SkillsInfo} />
      <Drawer.Screen name='Idiomas' component={LanguagesInfo} />
    </Drawer.Navigator>
  );
}
