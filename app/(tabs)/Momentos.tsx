import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground, Linking } from 'react-native';

const momentsData = [
  {
    id: 1,
    title: 'Charla Motivacional',
    image: require('../../assets/images/coach.jpg'),
    description: 'Coach Carter motiva a su equipo con un discurso inspirador sobre el compromiso y la disciplina.',
    videoUrl: 'https://www.youtube.com/embed/xhDILrGfA6s',
  },
  {
    id: 2,
    title: 'Importancia De Los Estudios',
    image: require('../../assets/images/Estudios.png'),
    description: 'El equipo del Instituto Richmond gana un partido crucial con una jugada increíble en los últimos segundos.',
    videoUrl: 'https://www.youtube.com/embed/kFRGk82I-1w',
  },
  {
    id: 3,
    title: 'Lección De Humildad',
    image: require('../../assets/images/Leccion.png'),
    description: 'Coach Carter enseña a sus jugadores la importancia del respeto propio y del trabajo en equipo.',
    videoUrl: 'https://www.youtube.com/embed/LZTYVez52Cw',
  },
];

const Momentos = () => {
  const [selectedMoment, setSelectedMoment] = useState<any>(null);

  const handleSelectMoment = (moment:any) => {
    setSelectedMoment(moment);
  };

  const handleOpenVideo = (videoUrl:any) => {
    Linking.openURL(videoUrl);
  };

  const renderItem = ({ item }:{ item:any }) => (
    <TouchableOpacity onPress={() => handleSelectMoment(item)}>
      <ImageBackground source={item.image} style={styles.itemContainer}>
        <View style={styles.overlay} />
        <Text style={styles.title}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedMoment ? (
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>{selectedMoment.title}</Text>
          <Text style={styles.detailDescription}>{selectedMoment.description}</Text>
          <TouchableOpacity style={styles.videoButton} onPress={() => handleOpenVideo(selectedMoment.videoUrl)}>
            <Text style={styles.videoButtonText}>Ver Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedMoment(null)}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={momentsData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 75,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
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
  closeButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Momentos;
