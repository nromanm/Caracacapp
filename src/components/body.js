import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Body() {
  return (
    <View style={styles.body}>
      <View style={styles.body}>
        <Text>Quzia esta sea la mesa de cartas?</Text>
        <Image source={require('../img/1h.png')} style={styles.carta} />
      </View>
      <View style={styles.mid}>
        <Image source={require('../img/back.png')} style={styles.carta} />
        <Image source={require('../img/back.png')} style={styles.carta} />
        <Image source={require('../img/back.png')} style={styles.carta} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 4,
    backgroundColor: '#54c478',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carta: {
    width: 50,
    height: 70,
  },
  mid: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Body;
