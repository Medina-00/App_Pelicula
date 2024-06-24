import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

function EnVida() {
  const [selectedMoment, setSelectedMoment] = useState<any>(null);

  const Url = 'https://youtu.be/Hpt9HEnwQFo'

  const handleOpenVideo = (videoUrl:any) => {
    Linking.openURL(videoUrl);
  };

  return (
    <View style={styles.container}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>VIDEO EXPLICANDO PORQUE ELEGI ESTA PELICULA (JUEGO DE HONOR)</Text>
          <TouchableOpacity style={styles.videoButton} onPress={() => handleOpenVideo(Url)}>
            <Text style={styles.videoButtonText}>Ver Video</Text>
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    color:'white',
  },
  detailTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color:'white',
  },
  detailDescription: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color:'white',
  },
  videoButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  videoButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default EnVida
