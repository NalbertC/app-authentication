import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Logo } from '~/components/Logo';
import { useAuth } from '~/hooks/useAuth';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const { navigate } = useNavigation();

  async function handleLogin() {
    return await signIn(email, password);
  }

  return (
    <View className="flex-1 bg-background justify-center items-center">
      <View className="bg-[#fbfdfd] p-6 rounded-xl min-w-[80%] flex" style={styles.container}>
        <View className="items-center">
          <Logo />
          <Text className="font-bold text-lg text-primary">Faça seu login</Text>
        </View>

        <View className="gap-2 py-2">
          <View className="">
            <Text className="font-bold px-2">E-mail</Text>
            <Input
              className="bg-white  h-10 rounded-md px-4 text-base justify-center"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="">
            <Text className="font-bold px-2">Senha</Text>
            <Input
              className="bg-white h-10 rounded-md px-4 text-base justify-center"
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <View className="mt-2 flex items-center ">
          <Button onPress={handleLogin}>Entrar</Button>

          <Text
            className="mt-4"
            onPress={() => {
              navigate('inscrible');
            }}>
            Não possui conta? Criar uma agora mesmo
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 8, // Esta propriedade é específica do Android para elevar a sombra
  },
});
