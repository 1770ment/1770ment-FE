import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

interface Tab {
  key: string;
  icon: string;
  label: string;
}

interface TabButtonProps {
  icon: string;
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const TabButton = ({ icon, label, isActive, onPress }: TabButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        tabButtonStyles.tabButton,
        isActive && tabButtonStyles.activeTabButton,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        style={[
          tabButtonStyles.tabIcon,
          isActive && tabButtonStyles.activeTabIcon,
        ]}
      >
        {icon}
      </Text>
      <Text
        style={[
          tabButtonStyles.tabLabel,
          isActive && tabButtonStyles.activeTabLabel,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const { height: screenHeight } = Dimensions.get('window');

interface BottomNavigationProps {
  activeTab: string;
  setActiveTab: (tabKey: string) => void;
}

export const BottomNavigation = ({
  activeTab,
  setActiveTab,
}: BottomNavigationProps) => {
  const tabs: Tab[] = [
    { key: 'home', icon: '🏠', label: '홈' },
    { key: 'archive', icon: '⏱️', label: '아카이브' },
    { key: 'my', icon: '👤', label: '마이' },
  ];

  return (
    <View style={styles.bottomTabBar}>
      {tabs.map((tab: Tab) => (
        <TabButton
          key={tab.key}
          icon={tab.icon}
          label={tab.label}
          isActive={activeTab === tab.key}
          onPress={() => setActiveTab(tab.key)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    paddingBottom: 10,
    paddingTop: 8,
    height: screenHeight * 0.13,
  },
});

const tabButtonStyles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  activeTabButton: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  activeTabIcon: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: '500',
  },
  activeTabLabel: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
