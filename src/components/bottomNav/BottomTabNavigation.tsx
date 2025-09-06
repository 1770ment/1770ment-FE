// src/components/bottomNav/BottomTabNavigation.tsx
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import TabButton from './TabButton';

interface Tab {
    key: string;
    icon: string;
    label: string;
}

const {height: screenHeight} = Dimensions.get('window');

interface BottomTabNavigationProps {
    activeTab: string;
    setActiveTab: (tabKey: string) => void;
}

const BottomTabNavigation: React.FC<BottomTabNavigationProps> = ({
    activeTab,
    setActiveTab,
}) => {
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
        height: screenHeight * 0.13, // 화면 높이의 13%
    },
});

export default BottomTabNavigation;