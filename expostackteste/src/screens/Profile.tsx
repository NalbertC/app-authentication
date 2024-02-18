import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '~/components/Button';
import { Header } from '~/components/Header';
import { useAuth } from '~/hooks/useAuth';

export function Profile({ navigation }) {
  const [altura, setAltura] = useState(0);
  const { user, signOut } = useAuth();
  const obterAltura = (event) => {
    const { height } = event.nativeEvent.layout;
    setAltura(height);
  };

  return (
    <View className="flex-1 bg-background">
      <Header>
        <View />
        <TouchableOpacity
          className="flex p-2 rounded-md h-12 w-12 items-center justify-center"
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <FontAwesome name="chevron-left" size={24} />
        </TouchableOpacity>
      </Header>
      <View className="px-4 flex-1 flex items-center relative">
        <View
          className=" w-full flex items-center absolute top-0 gap-2"
          style={{ transform: [{ translateY: -(altura / 4) }] }}>
          <Image
            onLayout={obterAltura}
            resizeMethod="resize"
            source={{
              uri: `https://github.com/NalbertC.png`,
            }}
            className="h-36 w-36 rounded-full"
          />

          <Text className="font-bold text-3xl">{user?.name}</Text>

          <View className="w-full  flex-1">
            <Button onPress={signOut}>Sair</Button>
          </View>
        </View>
      </View>
    </View>
  );
}
