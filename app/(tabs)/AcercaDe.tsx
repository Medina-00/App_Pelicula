import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AcercaDe = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/coach.jpg')}
        style={styles.photo}
      />
     
      <Text style={styles.contactInfo}>
      La película narra la historia verídica de Ken Carter, entrenador de baloncesto en Richmond High School, quien transforma al equipo desmotivado de los Richmond Oilers en campeones, mientras guía a los jóvenes hacia un futuro académico y lejos de problemas callejeros. Carter utiliza métodos rigurosos y poco convencionales para lograrlo, en una película que combina elementos deportivos con una crítica social al sistema educativo estadounidense.

      {'\n'}
      {'\n'}DIRECTOR:  Thomas Carter

      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
    color:'white'
  },
  photo: {
    width: 350,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  
  contactInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
    color:'white',
    fontFamily: 'Times New Roman',
  },
});

export default AcercaDe;
