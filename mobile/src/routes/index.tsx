import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './app.routes';
import { DrawerLayout } from './drawer.routes';

import { Loading } from '~/components/Loading';
import { useAuth } from '~/hooks/useAuth';

export function RootStack() {
  const { loading, user } = useAuth();

  return (
    <NavigationContainer>
      {loading ? (
        <>
          <Loading />
        </>
      ) : user.id ? (
        <DrawerLayout />
      ) : (
        <AppStack />
      )}
    </NavigationContainer>
  );
}
