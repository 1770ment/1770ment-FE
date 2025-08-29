import React, { useState } from 'react';
import LoginScreen from './src/screens/auth/LoginScreen';
import MainScreen from './src/screens/MainScreen';

type ScreenType = 'Login' | 'Main';

interface Navigation {
  navigate: (screen: ScreenType) => void;
  goBack?: () => void;
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('Login');

  const navigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  const navigation: Navigation = {
    navigate,
    goBack: () => navigate('Login')
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen navigation={navigation} />;
      case 'Main':
        return <MainScreen navigation={navigation} />;
      default:
        return <LoginScreen navigation={navigation} />;
    }
  };

  return renderScreen();
};

export default App;