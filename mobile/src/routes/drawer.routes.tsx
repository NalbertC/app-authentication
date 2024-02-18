import { Feather, FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './tab.routes';

import { AddProduct } from '~/screens/AddProduct';

const Drawer = createDrawerNavigator();

export function DrawerLayout() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
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
