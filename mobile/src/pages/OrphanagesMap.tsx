import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import mapMarkerIcon from '../assets/icons/map-marker.png';
import styles from "../assets/styles/pages/orphanages-map.js";

export default function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigateToOrphanage() {
    navigation.navigate('Orphanage');
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
        <Marker
          icon={mapMarkerIcon}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
          coordinate={{
            latitude: -27.5975783,
            longitude: -48.5080836,
          }}
        >
          <Callout
            tooltip={true}
            onPress={handleNavigateToOrphanage}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Casa Lar</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
          <Text style={styles.footerText}>2 orfanatos encontrados</Text>

          <TouchableOpacity
            style={styles.createOrphanageButton}
            onPress={() => {}}
          >
            <Feather name="plus" size={20} color="#FFF"/>
          </TouchableOpacity>
      </View>
    </View>
  );
}