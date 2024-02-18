import { createStackNavigator } from '@react-navigation/stack';
import { Modal } from 'react-native';

import { Inscrible } from '~/screens/Inscrible';
import { Login } from '~/screens/Login';

const Stack = createStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName="DrawerNavigator">
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="inscrible" component={Inscrible} options={{ headerShown: false }} />

      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{ presentation: 'modal', headerLeft: () => null }}
      />
    </Stack.Navigator>
  );
}
