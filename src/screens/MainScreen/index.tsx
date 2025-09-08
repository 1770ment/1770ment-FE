import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Animated,
    StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomTabNavigation from '../../components/bottomNav';
import ArchiveScreen from '../archive';
import MyScreen from '../my';

interface MainScreenProps {
    navigation: {
        navigate: (screen: 'Main' | 'Terms' | 'Login') => void;
    };
}

const HomeScreen = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 3000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const handleButtonPress = (): void => {
        console.log('그라데이션 버튼 클릭');
    };

    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={handleButtonPress} style={styles.buttonWrapper}>
                <Animated.View
                    style={[
                        styles.animatedGradient,
                        {
                            transform: [
                                {
                                    translateX: animatedValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [-50, 50],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <LinearGradient
                        colors={['#ff6ec4', '#7873f5', '#4ADEDE']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={StyleSheet.absoluteFill}
                    />
                </Animated.View>
                <Text style={styles.buttonText}>시작하기</Text>
            </TouchableOpacity>
        </View>
    );
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('home');

    // FIXME: 설정 버튼 클릭 시 로그인 화면으로 이동 (임시)
    const handleSetting = (): void => {
        navigation.navigate('Login');
    };

    const getScreenTitle = () => {
        return '1770'; // FIXME : 임시 타이틀
    };

    const renderScreen = () => {
        switch (activeTab) {
            case 'home':
                return <HomeScreen />;
            case 'archive':
                return <ArchiveScreen />;
            case 'my':
                return <MyScreen />;
            default:
                return <HomeScreen />;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffffff" />

            {/* 헤더 */}
            <View style={styles.header}>
                <Text style={styles.title}>{getScreenTitle()}</Text>
                <TouchableOpacity style={styles.settingButton} onPress={handleSetting}>
                    <Text style={{ fontSize: 24 }}>⚙️</Text>
                </TouchableOpacity>
            </View>

            {/* 콘텐츠 */}
            <View style={styles.contentWrapper}>
                {renderScreen()}
            </View>

            {/* 바텀 네비게이션 */}
            <BottomTabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
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
    logoutText: {
        fontSize: 12,
        color: '#6c757d',
        fontWeight: '500',
    },
    contentWrapper: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    screenIcon: {
        fontSize: 60,
        marginBottom: 20,
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: 10,
    },
    screenSubtitle: {
        fontSize: 16,
        color: '#6c757d',
        textAlign: 'center',
        lineHeight: 22,
    },
    buttonWrapper: {
        width: 250,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        marginTop: 30,
    },
    animatedGradient: {
        ...StyleSheet.absoluteFillObject,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        zIndex: 1,
    },
});

export default MainScreen;