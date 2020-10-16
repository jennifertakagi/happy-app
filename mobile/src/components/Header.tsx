import React from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface HeaderPops {
  title: string,
  showCancel?: boolean
}

import styles from '../assets/styles/components/header.js';

export default function Header({ title, showCancel = true }: HeaderPops) {
  const navigation = useNavigation();

  /**
   * Handles click to go back to orphanages map
   */
  function handleGoBackHome() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
  
      <Text style={styles.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackHome}>
          <Feather name="x" size={24} color="#ff669c" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  )
}
