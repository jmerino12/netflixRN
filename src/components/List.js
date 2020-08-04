import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import Orientation from 'react-native-orientation'
import PropTypes from 'prop-types'
import { getTwoItems } from '../api/api';

class List extends Component {
    componentWillMount() {
        Orientation.lockToPortrait();
    }

    newPushContent(item) {
        this.props.navigator.push({
            ident: 'Details',
            passProps: {
                item
            }
        })
    }

    _renderItem(item) {
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback onPress={() => navigate('Details', { item: item })}>
                <Image style={{ width: 120, height: 180 }} source={{ uri: item.image }} />
            </TouchableWithoutFeedback>

        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={styles.texto}>My List</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                        renderItem={({ item }) => this._renderItem(item)}
                        data={getTwoItems[0]} />
                </View>

                <View>
                    <Text style={styles.texto}>Tops Picks For Your</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                        renderItem={({ item }) => this._renderItem(item)}
                        data={getTwoItems[1]} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texto: {
        color: 'white',
        fontSize: 15
    }
})
export default List;