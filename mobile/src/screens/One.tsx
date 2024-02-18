import { Text, View } from 'react-native';

import EditScreenInfo from '../components/Component';

export function TabOneScreen() {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>Tab One</Text>
      <View className={styles.separator} />
      <EditScreenInfo path="src/screens/one.tsx" />
    </View>
  );
}

const styles = {
  container: 'items-center flex-1 justify-center',
  separator: 'h-[1px] my-7 w-4/5 bg-gray-200',
  title: 'text-xl font-bold',
};
