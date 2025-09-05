// src/screens/MainScreen/index.tsx
import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

// Animated LinearGradient 컴포넌트 생성
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface MainScreenProps {
    navigation: {
        navigate: (screen: 'Main' | 'Terms' | 'Login') => void;
    };
}

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    // 애니메이션을 위한 회전 값
    const rotation = useSharedValue(0);

    useEffect(() => {
        // 무한 회전 애니메이션 시작
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 3000, // 3초에 한 바퀴
                easing: Easing.linear,
            }),
            -1, // 무한반복
            false
        );
    }, []);

    // 애니메이션 스타일
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });

    const handleButtonPress = (): void => {
        console.log('원형 버튼 클릭됨');
        // 네비게이션 예시
        // navigation.navigate('Login');
    };

    const handleLogout = (): void => {
        console.log('로그아웃');
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>러닝크루 메인</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>로그아웃</Text>
                </TouchableOpacity>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                {/* 원형 마스크 컨테이너 */}
                <View style={styles.buttonContainer}>
                    {/* 움직이는 그라데이션 배경 (지름 10cm) */}
                    <AnimatedLinearGradient
                        colors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3', '#FF6B6B']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        style={[styles.gradientBackground, animatedStyle]}
                    />
                    
                    {/* 실제 버튼 (지름 5cm) */}
                    <TouchableOpacity 
                        style={styles.circleButton} 
                        onPress={handleButtonPress}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    logoutButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e9ecef',
    },
    logoutText: {
        fontSize: 12,
        color: '#6c757d',
        fontWeight: '500',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: 189, // 5cm 버튼 크기
        height: 189,
        borderRadius: 94.5,
        overflow: 'hidden', // 마스크 역할
        position: 'relative',
    },
    gradientBackground: {
        position: 'absolute',
        width: 378, // 10cm = 2 * 189px
        height: 378,
        borderRadius: 189,
        top: -94.5, // 중앙 정렬 (-189/2)
        left: -94.5, // 중앙 정렬 (-189/2)
    },
    circleButton: {
        width: '100%',
        height: '100%',
        borderRadius: 94.5,
        backgroundColor: 'transparent', // 투명하게 만들어서 그라데이션이 보이도록
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 48,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },
});

export default MainScreen;