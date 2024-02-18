import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '~/components/Button';
import { Header } from '~/components/Header';
import { Input } from '~/components/Input';
import { api } from '~/services/api';

interface AddProductProps extends DrawerNavigationProp<ReactNavigation.RootParamList> { }

export function AddProduct({ navigation }: AddProductProps) {
  const WEIGHT_IMAGE = Dimensions.get('screen').width - 40;

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  async function handleAddProduct() {
    if (name === '' || price === '') {
      Alert.alert('Alerta', 'Os campos nome e preço são obrigatórios');
    }

    const token = await AsyncStorage.getItem('token');

    try {
      const { data } = await api.post(
        '/products',
        {
          name,
          price: Number(price),
          description,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Alert.alert('Sucesso', 'Produto adicionado');
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          return Alert.alert('Ops...', 'Sua tentativa falhou tente novamente mais tarde');
        }

        // return error.response?.status;
      }

      Alert.alert('Ops...', 'Erro ao conectar ao servidor');
    }
  }

  return (
    <View className="flex-1 bg-background">
      <Header>
        <View className="w-12" />
        <Text className="font-bold text-xl">Adicionar produto</Text>
        <TouchableOpacity
          className="flex p-2 rounded-md h-12 w-12 items-center justify-center"
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <FontAwesome name="chevron-left" size={22} />
        </TouchableOpacity>
      </Header>
      <View className="flex-1">
        <ScrollView className="px-5 flex flex-1">
          <View className="flex gap-3 py-6">
            <View className="flex gap-1">
              <Text className="font-bold px-2">Nome</Text>
              <Input
                className="bg-white  h-10 rounded-md px-4 text-base justify-center"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View className="flex gap-1">
              <Text className="font-bold px-2">Preço</Text>
              <Input
                className="bg-white  h-10 rounded-md px-4 text-base justify-center"
                value={price}
                onChangeText={setPrice}
              />
            </View>

            <View className="flex gap-1">
              <Text className="font-bold px-2">Descrição</Text>
              <Input
                className="bg-white  h-10 rounded-md px-4 text-base justify-center"
                value={description}
                onChangeText={setDescription}
              />
            </View>

            <View className="flex gap-2 items-center">
              <Text className="font-bold px-2 w-full">Imagem</Text>
              {image ? (
                <Image
                  resizeMethod="resize"
                  source={{
                    uri: image,
                  }}
                  className=" border border-dashed rounded border-slate-400"
                  style={{ width: WEIGHT_IMAGE, height: WEIGHT_IMAGE }}
                />
              ) : (
                <View
                  style={{ width: WEIGHT_IMAGE, height: WEIGHT_IMAGE }}
                  className="border border-dashed rounded border-slate-400"
                />
              )}
              <Input value={image} onChangeText={setImage} />
            </View>
          </View>
          <View className="pb-8">
            <Button onPress={handleAddProduct}>Adicionar</Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
