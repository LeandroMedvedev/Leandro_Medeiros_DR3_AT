import { StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import { Button } from '../../components';

export default function AuthenticationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo</Text>
      <TextInput style={styles.input} placeholder='Nome de usuário' />
      <TextInput style={styles.input} placeholder='Senha' secureTextEntry />
      <Button
        title='ENTRAR'
        navigation={navigation}
        navText='TransactionList'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 8,
    backgroundColor: colors.white,
  },
});
