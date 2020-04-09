import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
//componente inteligente
import Header from './src/components/header';
import Body from './src/components/body';
import Footer from './src/components/footer';

class Caracacapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        {/*
        mesa de juego, con cartas tiradas por el jugador
        y el mazo de jugo, ademas de las tres cartas boca abajo
        y tres cartas boja arriba de cada uno
        */}
        <Body />
        {/*
        mano del jugador
        */}
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'green',
  },
});

export default Caracacapp;
