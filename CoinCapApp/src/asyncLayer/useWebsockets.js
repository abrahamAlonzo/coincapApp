import React, {useState, useEffect} from 'react';

function useWebsockets(coins) {
  const [websocket, setWebsocket] = useState(null);
  const [coinValues, setCoinValues] = useState(null);

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    try {
      if (websocket !== null) {
        websocket.onmessage = function (msg) {
          setCoinValues(msg.data);
        };
      }
    } catch (error) {
      console.error('error in onmessage websocket', error);
    }
  }, [websocket]);

  function connect(newCoins) {
    if (newCoins === undefined) {
      setWebsocket(
        new WebSocket(`wss://ws.coincap.io/prices?assets=${coins.join(',')}`),
      );
    } else {
      setWebsocket(
        new WebSocket(`wss://ws.coincap.io/prices?assets=${newCoins.join(',')}`),
      );
    }
  }

  function disconnect() {
    try {
      websocket.close();
      setWebsocket(null);
    } catch (error) {
      console.error('Error in disconnect',error);
    }
  }

  return {coinValues, connect, disconnect};
}

export default useWebsockets;
