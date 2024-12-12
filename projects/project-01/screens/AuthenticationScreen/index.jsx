import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
      <Text style={styles.title}>Bem-Vindo</Text>
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
    gap: 16,
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ebony,
  },
  title: {
    fontSize: 24,
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
