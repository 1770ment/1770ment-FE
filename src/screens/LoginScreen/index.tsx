import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface LoginScreenProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const handleKakaoLogin = () => {
        console.log('카카오 로그인');
        navigation.navigate('Main');
    };

    const handleAppleLogin = () => {
        console.log('애플 로그인');
        navigation.navigate('Main');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoPlaceholder}>
                        <Text style={styles.logoText}>🏃‍♂️</Text>
                    </View>
                    <Text style={styles.appName}>1770ment</Text>
                    <Text style={styles.subtitle}>러닝과 함께하는 순간들</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.loginButton, styles.kakaoButton]}
                        onPress={handleKakaoLogin}
                        activeOpacity={0.8}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.kakaoIcon}>💬</Text>
                            <Text style={styles.kakaoText}>카카오로 시작하기</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.loginButton, styles.appleButton]}
                        onPress={handleAppleLogin}
                        activeOpacity={0.8}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.appleIcon}>🍎</Text>
                            <Text style={styles.appleText}>Apple로 계속하기</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        로그인하면 서비스 약관 및 개인정보처리방침에 동의하게 됩니다.
                    </Text>
                </View>
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
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 40,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: height * 0.15,
    },
    logoPlaceholder: {
        width: 120,
        height: 120,
        backgroundColor: '#f0f0f0',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    logoText: {
        fontSize: 48,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        gap: 16,
    },
    loginButton: {
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    kakaoButton: {
        backgroundColor: '#FEE500',
    },
    appleButton: {
        backgroundColor: '#000000',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    kakaoIcon: {
        fontSize: 20,
    },
    kakaoText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#3C1E1E',
    },
    appleIcon: {
        fontSize: 20,
    },
    appleText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
    },
    footer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    footerText: {
        fontSize: 12,
        color: '#999999',
        textAlign: 'center',
        lineHeight: 18,
    },
});

export default LoginScreen;