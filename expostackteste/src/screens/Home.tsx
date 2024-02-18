import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { CardProduct } from '~/components/CardProduct';
import { Header } from '~/components/Header';
import { useAuth } from '~/hooks/useAuth';

export interface Product {
  id: string;
}

export function Home({ navigation }) {
  const { signOut } = useAuth();

  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    (async () => {
      try {
      } catch (error) {
        console.log('Caiu aqui', error);
      } finally {
        setLoadingProducts(false);
      }
    })();
  }, []);

  return (
    <View className="flex-1 bg-background">
      <Header>
        <TouchableOpacity
          className="flex p-2 rounded-md h-12 w-12 items-center justify-center"
          onPress={() => navigation.openDrawer()}
          activeOpacity={0.8}>
          <FontAwesome name="bars" size={28} />
        </TouchableOpacity>

        {/* <Text className="font-bold text-3xl px-3">Produtos</Text> */}
      </Header>
      <View className="flex-1 ">
        <Text className="px-5 py-4 font-bold text-2xl">Produtos</Text>
        <ScrollView className="px-5 flex-1 ">
          <View className="flex flex-row flex-wrap justify-between">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
