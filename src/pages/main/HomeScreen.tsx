import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const HomeScreen = () => {
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
      ]),
    ).start();
  }, [animatedValue]);

  const handleButtonPress = (): void => {
    console.log('그라데이션 버튼 클릭');
  };

  return (
    <View style={styles.content}>
      <TouchableOpacity
        onPress={handleButtonPress}
        style={styles.buttonWrapper}
      >
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
