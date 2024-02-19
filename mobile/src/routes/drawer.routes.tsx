import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import TabNavigator from './tab.routes';

import { useAuth } from '~/hooks/useAuth';
import { AddProduct } from '~/screens/AddProduct';

const Drawer = createDrawerNavigator();

export function DrawerLayout() {
  const { user, signOut } = useAuth();

  const CustomDrawer = ({ ...props }) => {
    return (
      <View className="flex-1">
        <DrawerContentScrollView {...props} className="">
          <View className="bg-primary/20 p-3 mx-3 flex-row items-center gap-2 rounded mb-2">
            {user.image ? (
              <Image
                source={{
                  uri: user.image,
                }}
                className="h-20 w-20 rounded-full"
              />
            ) : (
              <View className="h-20 w-20 rounded-full bg-slate-300 border border-slate-400" />
            )}
            <View>
              <Text className="font-bold text-lg">{user.name}</Text>
              <Text className=" text-base">{user.email}</Text>
            </View>
          </View>

          <View>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View className="">
          <TouchableOpacity
            className=" h-12 bg-primary flex flex-row px-3 items-center gap-8 mx-3 rounded mb-6"
            activeOpacity={0.8}
            onPress={signOut}>
            <Ionicons name="exit-outline" size={24} color="#fff" />
            <Text className="text-lg text-white font-bold">Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'rgba(153, 0, 136, 0.1)',
        drawerActiveTintColor: '#908',
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="homeScreen"
        component={TabNavigator}
        options={{
          title: 'Início',
          drawerIcon: ({ size, color }) => <FontAwesome name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="addProduct"
        component={AddProduct}
        options={{
          title: 'Adicionar Produto',
          drawerIcon: ({ size, color }) => <Feather name="plus" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
