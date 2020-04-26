import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main(){
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


  return <MapView initialRegion={currentRegion} style={styles.map} />;
}

const styles = StyleSheet.create({
  map: {
    flex:1,
  },
})


export default Main;