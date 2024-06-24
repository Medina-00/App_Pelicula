import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/image.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>Juego de Honor</Text>
          <Text style={styles.subtitle}>Dirigida por Thomas Carter</Text>
          <Text style={styles.description}>
            Basada en la historia real de Ken Carter y el equipo de baloncesto del Instituto Richmond.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Times New Roman',
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Times New Roman',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
});

export default index;
