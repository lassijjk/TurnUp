import { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

export const useAuthUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch(error) {
      console.log(error);
    }
  };
  console.log(user);
  return user;
};

export const useLogin = () => {
  const loginWithGoogle = async () => {
    try {
      await Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })
    } catch (error) {
      console.error(error);
    }
  };

  return { loginWithGoogle };
};

export const useLogout = () => {
  const logout = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return { logout };
};