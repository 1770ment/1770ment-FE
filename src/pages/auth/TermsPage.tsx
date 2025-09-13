import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface TermsPageProps {
  navigation: {
    navigate: (screen: 'Main' | 'Terms' | 'Login') => void;
  };
}

export const TermsPage = ({ navigation: _navigation }: TermsPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>이용약관</Text>
        <Text style={styles.subtitle}>약관 내용이 여기에 표시됩니다.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});
