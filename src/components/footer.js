import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';

function Footer() {
  prueba = () => {
    Alert.alert('funciona la prueba');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={this.prueba}>
        <Image source={require('../img/1h.png')} style={styles.carta} />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.prueba}>
        <Image source={require('../img/5s.png')} style={styles.carta} />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.prueba}>
        <Image source={require('../img/3d.png')} style={styles.carta} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  carta: {
    width: 50,
    height: 70,
  },
  footer: {
    flex: 1,
    backgroundColor: '#822f2e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Footer;
