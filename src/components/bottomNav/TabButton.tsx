// src/components/bottomNav/TabButton.tsx
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TabButtonProps {
    icon: string;
    label: string;
    isActive: boolean;
    onPress: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onPress }) => {
    return (
        <TouchableOpacity style={styles.tabButton} onPress={onPress}>
            <Text style={[styles.tabIcon, isActive && styles.tabIconActive]}>
                {icon}
            </Text>
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    tabIcon: {
        fontSize: 24,
        marginBottom: 4,
        opacity: 0.6,
    },
    tabIconActive: {
        opacity: 1,
    },
    tabLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: '#8E8E93',
    },
    tabLabelActive: {
        color: '#007AFF',
        fontWeight: '600',
    },
});

export default TabButton;