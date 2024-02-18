import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { CardProduct } from '~/components/CardProduct';
import { Header } from '~/components/Header';
import { useAuth } from '~/hooks/useAuth';
import { api } from '~/services/api';

export interface Product {
  id: string;
  name: string;
  image?: string;
  price: number;
  description?: string;
}

export function Home({ navigation }) {
  const { signOut } = useAuth();
  const { navigate } = useNavigation();

  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('products');
        setProducts(data);
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
        <View className="px-3 py-2 flex flex-row items-center justify-between">
          <Text className="px-2 font-bold text-2xl">Produtos</Text>
          <TouchableOpacity
            className="flex p-2 rounded-md h-12 w-12 items-center justify-center"
            onPress={() => navigation.navigate('addProduct')}
            activeOpacity={0.8}>
            <Feather name="plus" size={28} />
          </TouchableOpacity>
        </View>
        <ScrollView className="px-5 flex-1 ">
          <View className="flex flex-row flex-wrap justify-between pb-24">
            {products.map((product, i) => (
              <CardProduct
                key={`${product}+${i}`}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
