import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const bgImagePath = '../../resources/images/pokeBG.png';

export const BackDrop = ({ children }: any) => {
  const { width, height } = Dimensions.get('window');

  return (
    <ImageBackground
      source={require(bgImagePath)}
      resizeMode="repeat"
      height={height}
      width={width}
      style={styles.screen}>
      {children}
    </ImageBackground>
  );
};

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

export const BackDropGradient = ({
  colors,
  children
}: {
  colors: string[];
  children: JSX.Element | JSX.Element[];
}) => {
  const gradientAngle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(gradientAngle, {
        toValue: 360,
        duration: 5000,
        useNativeDriver: false
      })
    ).start();
  }, [gradientAngle]);

  return (
    <AnimatedGradient
      colors={colors}
      angle={gradientAngle}
      style={styles.screen}
      useAngle>
      {children}
    </AnimatedGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start'
  }
});
