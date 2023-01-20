import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import coin from '../../../assets/data/crypto.json';
import styles from './styles.js';

const CoinDetails = () => {
  const {
    image: { small },
    symbol,
    market_data: { market_cap_rank },
  } = coin;

  return (
    <View style={styles.headerContainer}>
      <Ionicons name='chevron-back-sharp' size={30} color='white' />
      <View>
        <Image
          source={{
            uri: small,
          }}
          style={{ width: 25, height: 25 }}
        />
        <Text style={{ color: 'white' }}>{symbol}</Text>
        <Text style={{ color: 'white' }}>#{market_cap_rank}</Text>
      </View>
      <EvilIcons name='user' size={24} color='white' />
    </View>
  );
};

export default CoinDetails;
