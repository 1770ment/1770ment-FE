import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Header, BottomNavigation } from '../../widgets';
import { useNavigation } from '../../features';
import { HomeScreen } from './HomeScreen';
import { ArchiveScreen } from './ArchiveScreen';
import { MyScreen } from './MyScreen';

interface MainPageProps {
  navigation: {
    navigate: (screen: 'Main' | 'Terms' | 'Login') => void;
  };
}

export const MainPage = ({ navigation }: MainPageProps) => {
  const { activeTab, navigateToTab } = useNavigation();

  const handleSetting = (): void => {
    navigation.navigate('Login');
  };

  const getScreenTitle = () => {
    return '1770';
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'archive':
        return <ArchiveScreen />;
      case 'my':
        return <MyScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffffff" />

      <Header title={getScreenTitle()} onSettingPress={handleSetting} />

      <View style={styles.contentWrapper}>{renderScreen()}</View>

      <BottomNavigation activeTab={activeTab} setActiveTab={navigateToTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentWrapper: {
    flex: 1,
  },
});
