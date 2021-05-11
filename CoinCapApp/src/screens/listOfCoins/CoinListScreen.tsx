import React, { useState, useEffect, useContext } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ROUTES } from '../../navigation'
import { HeaderList } from './components'
import useWebsockets from '../../asyncLayer/useWebsockets'
// import { UPDATE_COINS } from '../../redux/constants'
// import { Store } from '../../redux/provider'


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);



function CoinListScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState(null)
  // const [state, dispatch] = useContext(Store)
  const isFocused = useIsFocused();
  const coins = ['bitcoin','ethereum','monero','litecoin']
  const {coinValues,connect,disconnect} = useWebsockets(coins)

  useEffect(() => {
    // dispatch({ type: UPDATE_COINS, coinValues})
  },[coinValues])

  useEffect(() => {
    
    if(isFocused === false) {
      disconnect()
    } else {
      connect()
    }

  },[isFocused])


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#8fd9a8" : "#fb3640";
    const color = item.id === selectedId ? 'white' : 'black';

    const goToCoinDetails = () => {
      navigation.navigate(ROUTES.COIN_DETAILS)
    }

    return (
      <Item
        item={item}
        onPress={() => {
          goToCoinDetails()
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default CoinListScreen;
