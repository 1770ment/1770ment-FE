// src/screens/archive/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArchiveScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>📁</Text>
            <Text style={styles.title}>아카이브</Text>
            <Text style={styles.subtitle}>지난 러닝 기록들을 확인하세요</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f8f9fa',
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

export default ArchiveScreen;