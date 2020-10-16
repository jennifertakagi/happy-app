import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import api from '../services/api.js';
import mapMarkerIcon from '../assets/icons/map-marker.png';
import styles from '../assets/styles/pages/orphanages-map.js';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const navigation = useNavigation();

  useFocusEffect(() => {
    api.get('/orphanages')
      .then((response: { data?: never[] | undefined; }) => {
        const { data = [] } = response;

        setOrphanages(data);
      })
  });

  /**
   * Handles to navigate to orphanage page
   */
  function handleNavigateToOrphanage(id: number) {
    navigation.navigate('Orphanage', { id });
  }

  /**
   * Handles to navigate to create a new orphanage page
   */
  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition');
  }
  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -27.5975783,
          longitude: -48.5080836,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarkerIcon}
              calloutAnchor={{
                x: 2.7,
                y: 0.8
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout
                tooltip={true}
                onPress={() => handleNavigateToOrphanage(orphanage.id)}
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
          <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>

          <RectButton
            style={styles.createOrphanageButton}
            onPress={handleNavigateToCreateOrphanage}
          >
            <Feather name="plus" size={20} color="#FFF"/>
          </RectButton>
      </View>
    </View>
  );
}