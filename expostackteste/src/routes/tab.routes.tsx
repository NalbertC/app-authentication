import FontAwesome from '@expo/vector-icons/FontAwesome';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Profile } from '../screens/Profile';

import { Home } from '~/screens/Home';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    return (
      <View className="absolute bottom-0 left-0 right-0 px-4 pb-4">
        <View className="flex-row h-20 bg-white rounded-2xl" style={styles.container}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const tabBarIcon = options.tabBarIcon;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                key={index}
                onPress={onPress}
                activeOpacity={0.9}
                className={`flex-1 items-center justify-center ${!isFocused && 'scale-95'} ${isFocused && 'scale-105'} `}>
                {tabBarIcon &&
                  tabBarIcon({
                    focused: isFocused,
                    size: 24,
                    color: isFocused ? '#908' : '#6B7280',
                  })}
                <Text className={isFocused ? 'text-primary font-bold' : 'text-gray-500'}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="One"
        component={Home}
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => <FontAwesome name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Two"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 3, // Esta propriedade é específica do Android para elevar a sombra
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    height: 60,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemFocused: {
    backgroundColor: 'lightgray',
  },
});
