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
        navigate: (screen: 'Main' | 'Terms' | 'Login') => void;
    };
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const handleKakaoLogin = () => {
        console.log('카카오로 시작하기');
        navigation.navigate('Terms');
    };

    const handleAppleLogin = () => {
        console.log('애플로 시작하기');
        navigation.navigate('Terms');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Text style={styles.appName}>1770ment</Text>
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
                            <Text style={styles.appleText}>애플로 시작하기</Text>
                        </View>
                    </TouchableOpacity>
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
        gap: 130,
        paddingHorizontal: 16,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: height * 0.29,
    },
    appName: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#333333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        gap: 10,
    },
    loginButton: {
        height: 60,
        borderRadius: 8,
        paddingHorizontal: 40,
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
        backgroundColor: '#FEE102',
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