import { ActivityIndicator, StatusBar, View } from 'react-native';

export function Loading() {
  return (
    <View className="flex-1 bg-background justify-center itens-center ">
      <ActivityIndicator color="#023f85" />
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </View>
  );
}
