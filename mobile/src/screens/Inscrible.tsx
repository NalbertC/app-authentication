import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Logo } from '~/components/Logo';

interface IncribleProps { }

export function Inscrible({ }: IncribleProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { navigate } = useNavigation();

  async function handleInscrible() {
    return Alert.alert('Caiu aqui', 'Ainda tem esperança');
  }

  return (
    <View className="flex-1 bg-background justify-center items-center">
      <View className="bg-[#fbfdfd] p-6 rounded-xl min-w-[80%] flex" style={styles.container}>
        <View className="items-center">
          <Logo />
          <Text className="font-bold text-lg text-primary">Criar conta grátis</Text>
        </View>

        <View className="gap-2 py-2">
          <View className="">
            <Text className="font-bold px-2">Nome</Text>
            <Input
              className="bg-white  h-10 rounded-md px-4 text-base justify-center"
              value={name}
              onChangeText={setName}
            />
          </View>

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

          <View className="">
            <Text className="font-bold px-2">Cnnfirmar senha</Text>
            <Input
              className="bg-white h-10 rounded-md px-4 text-base justify-center"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </View>
        </View>

        <View className="mt-2 flex items-center ">
          <Button onPress={handleInscrible}>Criar</Button>

          <Text
            className="mt-4"
            onPress={() => {
              navigate('login');
            }}>
            Já possui conta? Ir para login
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
