import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

export function Logo() {
  return (
    <View className=" justify-center itens-center ">
      <FontAwesome name="lock" size={40} />
    </View>
  );
}
