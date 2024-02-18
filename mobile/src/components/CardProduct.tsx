import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { name } from 'tailwindcss';

import { Product } from '~/screens/Home';

interface CardProductProps extends Product { }

export function CardProduct({ id, price, image, name }: CardProductProps) {
  const WEIGHT_IMAGE = (Dimensions.get('screen').width - 46) / 2;
  const [isLike, setIsLike] = useState(false);

  return (
    <View
      key={id}
      style={{ width: WEIGHT_IMAGE, height: WEIGHT_IMAGE / (2 / 3) }}
      className="bg-primary/5 rounded-xl mb-2 border border-slate-300 flex p-4 items-stretch gap-2">
      <View className=" w-full" style={{ height: ((WEIGHT_IMAGE / (2 / 3) - 40) / 4) * 3 }}>
        <Image
          source={{
            uri: image,
          }}
          className="flex-1 rounded-md"
        />
      </View>
      <View className=" w-full flex gap-1 " style={{ height: (WEIGHT_IMAGE / (2 / 3) - 40) / 4 }}>
        <Text className="font-bold text-lg">{name}</Text>
        <View className="flex flex-row justify-between ">
          <Text className="text-lg">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price)}
          </Text>
          <TouchableOpacity className=" flex " onPress={() => setIsLike(!isLike)}>
            {isLike ? (
              <Ionicons name="heart" size={24} color="#908" />
            ) : (
              <Ionicons name="heart-outline" size={24} color="#908" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
