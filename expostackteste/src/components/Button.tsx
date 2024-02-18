import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps { }

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-primary h-11 w-full rounded-md items-center justify-center"
      {...rest}
      activeOpacity={0.9}>
      <Text className="text-white font-bold text-base">{children}</Text>
    </TouchableOpacity>
  );
}
