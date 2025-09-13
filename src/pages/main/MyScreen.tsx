import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>👤</Text>
      <Text style={styles.title}>마이</Text>
      <Text style={styles.subtitle}>마이 페이지 기능이 여기에 표시됩니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    lineHeight: 22,
  },
});
