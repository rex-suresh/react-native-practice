import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
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

export const BackDropGradient = ({
  colors,
  children
}: {
  colors: string[];
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <LinearGradient colors={colors} angle={45} style={styles.screen} useAngle>
      {children}
    </LinearGradient>
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
