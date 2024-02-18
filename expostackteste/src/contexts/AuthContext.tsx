import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface AuthContextType {
  user: User;
  loading: boolean;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<any>;
}

interface AuthContextProviderProps {
  children: JSX.Element;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const recoveredUser = await AsyncStorage.getItem('user');

      if (recoveredUser) {
        setUser(JSON.parse(recoveredUser));
      }

      console.log('batendo aqui', recoveredUser);

      setLoading(false);
    })();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/login', {
        email,
        password,
      });

      const loggedUser = data.user;
      const token = data.token;

      // const user = {
      //   id: 'sdfasdfpiahsfoais',
      //   name: 'Nlc',
      //   email: 'nlc@email.com',
      // };
      // const token = 'asdfasfasfasfasfasfasfafs';

      AsyncStorage.setItem('user', JSON.stringify(loggedUser));
      AsyncStorage.setItem('token', token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(user);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          return Alert.alert('Ops...', 'Usuario ou senha inválidos');
        }

        // return error.response?.status;
      }

      return Alert.alert('Ops...', 'Erro ao conectar-se ao servidor');
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('token');
    setUser({} as User);
    api.defaults.headers.authorization = null;
  }

  return (
    <AuthContext.Provider value={{ loading, signIn, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
