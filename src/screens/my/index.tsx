import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>👤</Text>
            <Text style={styles.title}>마이페이지</Text>
            <Text style={styles.subtitle}>내 정보와 설정을 관리하세요</Text>
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

export default MyScreen;