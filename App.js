
import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import List from './src/components/List';
import Slide from './src/components/Slider';

class App extends Component {
  render() {
    return (
      <View style={[{ flex: 1 }, style.contenedor]}>
        <Slide />
        <List />
      </View>
    )
  }
}


const style = StyleSheet.create({
  contenedor: {
    backgroundColor: 'black'
  }
})
export default App;
