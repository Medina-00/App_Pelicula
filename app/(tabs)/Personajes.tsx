import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Definición de la interfaz para un personaje
interface Character {
  id: number;
  name: string;
  image: any; // Este tipo es para imágenes requeridas localmente en React Native
  details: string;
}

// Arreglo de personajes que cumplen con la interfaz Character
const characters: Character[] = [
  { id: 1, name: 'Timo Cruz 👤', image: require('../../assets/images/Timo.png'), details: 'Timo Cruz era traficante de drogas con su primo Renny y ganaba dinero vendiendo las drogas. Solo estaban Ken Carter y el equipo de baloncesto que consideraba capaces de salvarlo y protegerlo de la realidad del mundo de gánsteres en el que había estado y que hizo que mataran a su primo.' },
  { id: 2, name: 'Ken Carter👤', image: require('../../assets/images/KenCarter.png'), details: 'Es el entrenador del equipo de baloncesto de la Richmond High School. Carter es conocido por su enfoque estricto y su compromiso con el éxito académico y deportivo de sus jugadores. Su filosofía de entrenamiento y su determinación para cambiar las vidas de los jóvenes son centrales en la trama de la película.' },
  { id: 3, name: 'Damien Carter 👤', image: require('../../assets/images/Damian.png'), details: 'Es el hermano mayor de Kenyon Stone y un jugador clave en el equipo. Damien es un talentoso jugador que enfrenta desafíos personales y familiares, pero su amor por el baloncesto y su relación con su hermano menor son aspectos importantes de su desarrollo como personaje.' },
];

const Personajes = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleCharacterPress = (character: Character) => {
    setSelectedCharacter(character);
    // Aquí podrías navegar a la pantalla de detalles si lo deseas
  };

  const renderItem = ({ item }: { item: Character }) => (
    <TouchableOpacity onPress={() => handleCharacterPress(item)} style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.itemText}>SELECCIONE UN PERSONAJE!!</Text>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedCharacter && (
        <View style={styles.detailsContainer}>
          <Image style={styles.image} source={selectedCharacter.image}  />
          <Text style={styles.detailsText}>{selectedCharacter.details}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor:'black'
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    color:'white',
    fontFamily: 'Times New Roman',
  },
  detailsContainer: {
    marginTop:10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    borderRadius: 75,
    height: 250,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    textAlign: 'center',
    color:'white',
    fontFamily: 'Times New Roman',
  },
});

export default Personajes;
