import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

const CoinItem = ({ marketCoin }) => {
  const {
    name,
    image,
    symbol,
    current_price,
    market_cap_rank,
    market_cap,
    price_change_percentage_24h,
  } = marketCoin;

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1_000_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000_000)} T`;
    }
    if (marketCap > 1_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000)} B`;
    }
    if (marketCap > 1_000_000) {
      return `${Math.floor(marketCap / 1_000_000)} M`;
    }

    if (marketCap > 1_000) {
      return `${Math.floor(marketCap / 1_000)} K`;
    }
    return marketCap;
  };

  const pourcentageColor =
    price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  return (
    <View style={styles.coinContainer}>
      {/* left side */}
      <Image
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
        }}
        source={{
          uri: image,
        }}
      />

      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
            size={12}
            color={pourcentageColor}
            style={{ alignSelf: 'center', marginRight: 5 }}
          />

          <Text style={{ color: pourcentageColor }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>

      {/* right side */}
      <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{ color: 'white' }}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;
