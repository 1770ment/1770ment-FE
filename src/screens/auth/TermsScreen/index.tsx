import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    Alert,
} from 'react-native';

const { height } = Dimensions.get('window');

interface TermsScreenProps {
    navigation: {
        navigate: (screen: 'Main' | 'Login') => void;
    };
}

const TermsScreen: React.FC<TermsScreenProps> = ({ navigation }) => {
    const [isAllAgreed, setIsAllAgreed] = useState(false);
    const [agreements, setAgreements] = useState({
        privacy: false,
        thirdPartyRequired: false,
        thirdPartyOptional: false,
    });

    // NOTE : 전체 동의하기 핸들러
    const handleAllAgree = () => {
        const newState = !isAllAgreed;
        setIsAllAgreed(newState);
        setAgreements({
            privacy: newState,
            thirdPartyRequired: newState,
            thirdPartyOptional: newState,
        });
    };

    // NOTE : 개별 약관 동의 핸들러
    const handleIndividualAgree = (key: keyof typeof agreements) => {
        const newAgreements = {
            ...agreements,
            [key]: !agreements[key],
        };
        setAgreements(newAgreements);

        // NOTE : 필수 항목이 모두 체크되었는지 확인
        const allRequired = newAgreements.privacy && newAgreements.thirdPartyRequired;
        const allChecked = allRequired && newAgreements.thirdPartyOptional;
        setIsAllAgreed(allChecked);
    };

    // NOTE : 동의하고 시작하기 핸들러
    const handleStart = () => {
        // NOTE : 필수 항목 체크 확인
        if (!agreements.privacy || !agreements.thirdPartyRequired) {
            Alert.alert(
                '알림',
                '필수 약관에 동의해주세요.',
                [{ text: '확인' }]
            );
            return;
        }

        navigation.navigate('Main');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.topSection}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.appName}>1770</Text>
                    </View>
                    <View style={styles.termsContainer}>
                        <Text style={styles.termsText}>서비스 이용을 위해</Text>
                        <Text style={styles.termsText}>이용약관의 동의가 필요합니다</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.checkButton}
                        onPress={handleAllAgree}
                        activeOpacity={0.8}
                    >
                        <View style={styles.checkContainer}>
                            <Text style={[styles.checkIcon, isAllAgreed && styles.checkIconActive]}>
                                ✓
                            </Text>
                            <Text style={[styles.checkText, isAllAgreed && styles.checkTextActive]}>전체 동의하기</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.individualTermsContainer}>
                        <TouchableOpacity
                            style={styles.termItem}
                            onPress={() => handleIndividualAgree('privacy')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.termContent}>
                                <Text style={[styles.smallCheckIcon, agreements.privacy && styles.smallCheckIconActive]}>
                                    ✓
                                </Text>
                                <Text style={styles.requiredText}>(필수)</Text>
                                <Text style={styles.termLabel}>개인정보 수집 및 이용 안내</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.termItem}
                            onPress={() => handleIndividualAgree('thirdPartyRequired')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.termContent}>
                                <Text style={[styles.smallCheckIcon, agreements.thirdPartyRequired && styles.smallCheckIconActive]}>
                                    ✓
                                </Text>
                                <Text style={styles.requiredText}>(필수)</Text>
                                <Text style={styles.termLabel}>제 3자 제공 동의</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.termItem}
                            onPress={() => handleIndividualAgree('thirdPartyOptional')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.termContent}>
                                <Text style={[styles.smallCheckIcon, agreements.thirdPartyOptional && styles.smallCheckIconActive]}>
                                    ✓
                                </Text>
                                <Text style={styles.optionalText}>(선택)</Text>
                                <Text style={styles.termLabel}>제 3자 제공 동의</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottomSection}>
                    <TouchableOpacity
                        style={[styles.startButton, (!agreements.privacy || !agreements.thirdPartyRequired) && styles.startButtonDisabled]}
                        onPress={handleStart}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.startButtonText}>
                            동의하고 시작하기
                        </Text>
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
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    topSection: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        paddingTop: height * 0.18,
        marginBottom: 30,
    },
    appName: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000000',
    },
    termsContainer: {
        alignItems: 'center',
        gap: 4,
        marginBottom: 50,
    },
    termsText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    checkButton: {
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#EAEEF2',
    },
    checkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkIcon: {
        fontSize: 24,
        color: '#d0d0d0',
        fontWeight: 'bold',
        marginRight: 12,
    },
    checkIconActive: {
        color: '#DD39FF',
    },
    checkText: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
    },
    checkTextActive: {
        color: '#DD39FF',
    },
    individualTermsContainer: {
        gap: 12,
        marginTop: 20,
        marginBottom: 40,
    },
    termItem: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    termContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    smallCheckIcon: {
        fontSize: 20,
        color: '#d0d0d0',
        fontWeight: 'bold',
        marginRight: 12,
    },
    smallCheckIconActive: {
        color: '#DD39FF',
    },
    requiredText: {
        fontSize: 16,
        color: '#F7BFF6',
        fontWeight: '600',
        marginRight: 8,
    },
    optionalText: {
        fontSize: 16,
        color: '#F7BFF6',
        fontWeight: '600',
        marginRight: 8,
    },
    termLabel: {
        fontSize: 16,
        color: '#000000',
        flex: 1,
    },
    bottomSection: {
        paddingBottom: height * 0.04,
    },
    startButton: {
        backgroundColor: '#DD39FF',
        borderRadius: 12,
        paddingVertical: 16,
    },
    startButtonDisabled: {
        backgroundColor: '#D5DBDF',
    },
    startButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TermsScreen;