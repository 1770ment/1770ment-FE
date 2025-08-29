import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';

type ScreenType = 'Login' | 'Main';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('Login');

  const navigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen navigation={{ navigate }} />;
      case 'Main':
        return <MainScreen navigation={{ navigate, goBack: () => navigate('Login') }} />;
      default:
        return <LoginScreen navigation={{ navigate }} />;
    }
  };

  return renderScreen();
};

export default App;