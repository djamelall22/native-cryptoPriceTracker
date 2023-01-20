import React from 'react';
import styles from './CoinDetailsHeaderStyles.js';
import { View, Image, Text } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

const CoinDetailsHeader = ({ symbol, rank, image }) => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name='chevron-back-sharp' size={30} color='white' />
      <View style={styles.tickerContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.tickerTitle}>{symbol.toLocaleUpperCase()}</Text>

        <View style={styles.rankContainer}>
          <Text style={styles.rank}>#{rank}</Text>
        </View>
      </View>
      <EvilIcons name='user' size={24} color='white' />
    </View>
  );
};

export default CoinDetailsHeader;
