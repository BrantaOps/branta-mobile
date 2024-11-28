import React from 'react';
import { StyleSheet, View } from 'react-native';


const QRScanner = () => {
  return (
    <View style={styles.container}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default QRScanner;
