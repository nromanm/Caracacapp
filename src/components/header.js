import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerL}>
        <Text>Acá podria ir el menu</Text>
      </View>
      <View style={styles.headerR}>
        <Text>Y acá las estadisticas como puntos, etc.</Text>
        <Image source={require('../img/avatar.png')} style={styles.avatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  headerL: {
    flex: 0.5,
    backgroundColor: '#8d887c',
    justifyContent: 'center',
  },
  headerR: {
    flex: 2,
    backgroundColor: '#4e674e',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 80,
    resizeMode: 'contain',
    marginLeft: 200,
    position: 'absolute',
  },
});

export default Header;
