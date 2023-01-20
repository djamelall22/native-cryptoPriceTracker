import React from 'react';
import { View, Text, Image } from 'react-native';
import CoinDetailsHeader from './CoinDetailsHeader';
import coin from '../../../assets/data/crypto.json';

const CoinDetails = () => {
  const {
    image: { small },
    symbol,
    market_data: { market_cap_rank },
  } = coin;

  return (
    <View>
      {/* coin details header */}
      <CoinDetailsHeader image={small} rank={market_cap_rank} symbol={symbol} />

      {/* coin details body */}
      <Text styles></Text>
    </View>
  );
};

export default CoinDetails;
