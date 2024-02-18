import { View, ViewProps } from 'react-native';

interface HeaderProps extends ViewProps { }

export function Header({ children }: HeaderProps) {
  return (
    <View className="w-full h-[116] bg-primary flex justify-end">
      <View className="w-full h-[72] flex flex-row-reverse items-center justify-between px-2">
        {children}
      </View>
    </View>
  );
}
