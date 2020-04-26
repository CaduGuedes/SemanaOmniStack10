import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main({ navigation }){
  const [currentRegion, setCurrentRegion] = useState(null);
  useEffect(() => {
    async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync();

      if (granted){ //condição que analisa se usuário deu permissão para usar a localização
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: false, //não buscará utilizando gps do celular
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }


  return (
  <MapView initialRegion={currentRegion} style={styles.map}>
    <Marker coordinate={{ latitude: -17.2222019, longitude: -42.5901277 }}>
      <Image style={styles.avatar}source={{ uri: 'https://avatars3.githubusercontent.com/u/16464080?s=460&u=5393e0d4639c8bc5062f28679c8ba6ce4069d363&v=4' }} />

      <Callout onPress={()=> {
        //Navegação
        navigation.navigate('Profile', { github_username: 'CaduGuedes'});
      } }>
        <View style={styles.callout}>
          <Text style={styles.devName}>Cadu Guedes</Text>
          <Text style={styles.devBio}>BIOBIOBIOBIO</Text>
          <Text style={styles.devTechs}>ReactJS, ReactNative, Node.js</Text>

        </View>
      </Callout>
    </Marker>
  </MapView> 
    );
}

const styles = StyleSheet.create({
  map: {
    flex:1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF'
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },


})


export default Main;