import React, { useState } from 'react';
import { AuthPage, MainPage, TermsPage } from '../../pages';

type ScreenType = 'Login' | 'Terms' | 'Main';

interface Navigation {
  navigate: (screen: ScreenType) => void;
  goBack?: () => void;
}

export const AppRouter = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('Login');

  const navigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  const navigation: Navigation = {
    navigate,
    goBack: () => navigate('Login'),
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <AuthPage navigation={navigation} />;
      case 'Terms':
        return <TermsPage navigation={navigation} />;
      case 'Main':
        return <MainPage navigation={navigation} />;
      default:
        return <AuthPage navigation={navigation} />;
    }
  };

  return renderScreen();
};
