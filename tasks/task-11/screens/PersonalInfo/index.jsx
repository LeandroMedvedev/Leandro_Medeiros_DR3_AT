import { FontAwesome } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles.js';

export default function PersonalInfo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://via.placeholder.com/243x120' }}
      />
      <Text style={styles.name}>Leandro Medeiros</Text>
      <Text style={styles.address}>Endereço: Andorinhas, Magé - RJ</Text>
      <Text style={styles.phone}>(##) ## #####-####</Text>
      <Text style={styles.email}>leandro.medeiros@al.infnet.edu.br</Text>
      <Text style={styles.bio}>
        Bio: Desenvolvedor Web Full Stack e estudante de Engenharia de Software
      </Text>

      <View style={styles.socialMedia}>
        <TouchableOpacity>
          <FontAwesome name='linkedin' size={32} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name='github' size={32} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name='youtube' size={32} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.ebony,
  },
  image: {
    width: 243,
    height: 120,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
  },
  address: {
    fontSize: 18,
    marginTop: 5,
    color: colors.white,
  },
  phone: {
    fontSize: 18,
    marginTop: 5,
    color: colors.white,
  },
  email: {
    fontSize: 18,
    marginTop: 5,
    color: colors.skyBlue,
  },
  bio: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    color: colors.white,
  },
  socialMedia: {
    width: 250,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
