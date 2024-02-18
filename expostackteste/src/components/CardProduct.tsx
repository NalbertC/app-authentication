import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

import { Product } from '~/screens/Home';

interface CardProductProps extends Product { }

export function CardProduct({ id }: CardProductProps) {
  const WEIGHT_IMAGE = (Dimensions.get('screen').width - 46) / 2;
  const [isLike, setIsLike] = useState(false);

  return (
    <View
      key={id}
      style={{ width: WEIGHT_IMAGE, height: WEIGHT_IMAGE / (2 / 3) }}
      className="bg-primary/5 rounded-xl mb-2 border border-slate-300 flex">
      <View className="h-2/3 w-full px-4">
        <TouchableOpacity
          className="h-10 flex justify-center items-end "
          onPress={() => setIsLike(!isLike)}>
          {isLike ? (
            <Ionicons name="heart" size={24} color="#908" />
          ) : (
            <Ionicons name="heart-outline" size={24} color="#908" />
          )}
        </TouchableOpacity>
        <Image
          source={{
            uri: `https://github.com/NalbertC.png`,
          }}
          className="flex-1 rounded-md"
        />
      </View>
      <View className="h-1/3 w-full flex px-4 py-3 gap-1">
        <Text className="font-bold text-lg">Produto ter</Text>
        <Text className="text-xl">R$ 200,00</Text>
      </View>
    </View>
  );
}
