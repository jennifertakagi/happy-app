import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, MapEvent } from 'react-native-maps';

import styles from '../../assets/styles/pages/select-map-position.js';

import mapMarkerIcon from '../../assets/icons/map-marker.png';

export default function SelectMapPosition() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const navigation = useNavigation();

  /**
   * Handles the next step, go to register page
   */
  function handleNextStep() {
    navigation.navigate('OrphanageData', { position });
  }

  /**
   * Handles to select map position
   * @param {MapEvent} event 
   */
  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <View style={styles.container}>
      <MapView 
        initialRegion={{
          latitude: -27.5975783,
          longitude: -48.5080836,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
           <Marker 
           icon={mapMarkerIcon}
           coordinate={{ latitude: position.latitude, longitude: position.longitude }}
         />
        )}
      </MapView>

      <RectButton style={styles.nextButton} onPress={handleNextStep}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </RectButton>
    </View>
  )
}