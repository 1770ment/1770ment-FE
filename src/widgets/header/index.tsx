import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  onSettingPress?: () => void;
}

export const Header = ({ title, onSettingPress }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {onSettingPress && (
        <TouchableOpacity style={styles.settingButton} onPress={onSettingPress}>
          <Text style={styles.settingIcon}>⚙️</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  settingButton: {
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  settingIcon: {
    fontSize: 24,
  },
});
