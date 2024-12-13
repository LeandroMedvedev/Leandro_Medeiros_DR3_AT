import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { AVATAR_URL } from '../../../../constants/index.js';
import { colors } from '../../../../styles/globalStyles';
import { Button } from '../../components';

export default function AuthenticationScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username && password) {
      alert(`Bem-vindo, ${username}!`);
      navigation.navigate('TransactionList');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: AVATAR_URL }} />
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder='Usuário'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder='Senha'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title='ENTRAR'
        onPress={handleSignIn}
        disabled={!username || !password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ebony,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 50,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
  input: {
    width: 310,
    padding: 12,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
});
