
import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import SideMenu from 'react-native-side-menu'
import List from './src/components/List';
import Slide from './src/components/Slider';
import Header from './src/components/Header'
import Menu from './src/components/Menu';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  updateMenu(isOpen) {
    this.setState({ isOpen })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SideMenu menu={<Menu />} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenu(isOpen)} style={{ flex: 1 }}>
          <View style={[{ flex: 1 }, style.contenedor]}>
            <Header toggle={this.toggle.bind(this)} style={{ flex: 1 }} navigator={this.props.navigator} />
            <Slide />
            <List navigator={this.props.navigator} />
          </View>

        </SideMenu>

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
