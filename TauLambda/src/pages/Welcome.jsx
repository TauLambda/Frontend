// Importaciones de React y componentes de UI
import React from 'react';
import { Avatar, Text } from '@ui-kitten/components';
import { ImageBackground, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

// Importación de imágenes
import AvatarImage from '../images/senora.png';
import WelcomeImage from '../images/Brands_People_OxxoGas_gasolinera.png';
import GasImage from '../images/Gas.png';
import HistorialImage from '../images/Historial.png';
import LogoImage from '../images/OXXOGAS2.png';

// Datos estáticos para las tarjetas de servicios
const DATA = [
  {
    id: '1',
    imagenUrl: GasImage,
    texto: 'Carga',
  },
  {
    id: '2',
    imagenUrl: HistorialImage,
    texto: 'Historial',
  },
];

// Componente funcional para cada tarjeta de servicio
const ListItem = ({ item, navigation }) => {
  // Función para manejar el clic en una tarjeta y navegar a la pantalla correspondiente
  const handlePress = () => {
    if (item.texto === 'Carga') {
      navigation.navigate('CargaParticular');
    } else if (item.texto === 'Historial') {
      navigation.navigate('HistorialParticular');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {/* Contenedor de la tarjeta */}
      <View style={styles.cardContainer}>
        {/* Sección superior de la tarjeta con imagen */}
        <View style={styles.cardImageContainer}>
          <Image source={item.imagenUrl} style={styles.cardImage} />
        </View>
        {/* Sección inferior de la tarjeta con texto */}
        <View style={styles.cardTextContainer}>
          <Text category='h4'>{item.texto}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Componente principal de la pantalla de bienvenida
const Welcome = ({ navigation }) => {
  // Función para manejar el clic en el avatar y navegar al perfil
  const handlePress = () => {
    navigation.navigate('PerfilParticular');
  };

  return (
    // Contenedor principal
    <View style={styles.container}>
      {/* Sección superior con logo y avatar */}
      <View style={styles.header}>
        {/* Contenedor del logo */}
        <View style={styles.logoContainer}>
          <Image source={LogoImage} style={styles.logoImage} />
        </View>
        {/* Contenedor del avatar */}
        <View style={styles.avatarContainer}>
          {/* Avatar con efecto de imagen de fondo */}
          <TouchableOpacity onPress={handlePress}>
            <Avatar
              source={AvatarImage}
              ImageComponent={ImageBackground}
              size='large'
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Sección central con imagen de bienvenida */}
      <View style={styles.welcomeImageContainer}>
        <Image source={WelcomeImage} style={styles.welcomeImage} />
      </View>
      {/* Sección inferior con tarjetas de servicios */}
      <View style={styles.servicesContainer}>
        <Text category='h2'>Servicios</Text>
        {/* Lista de tarjetas de servicios */}
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
          numColumns={2}
          columnWrapperStyle={styles.servicesList}
        />
      </View>
    </View>
  );
};

// Estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
  logoContainer: {
    width: 140,
    height: 70,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  avatarContainer: {
    width: 70,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderColor: '#ddd',
    borderWidth: 1,
  },
  welcomeImageContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  welcomeImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  servicesContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#ddd',
    borderWidth: 2,
    height: 230,
    width: 160,
  },
  cardImageContainer: {
    flex: 2,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    margin: 4,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardTextContainer: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  servicesList: {
    justifyContent: 'space-between',
  },
});

export default Welcome;
