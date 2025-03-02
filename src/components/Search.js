import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, StyleSheet, Dimensions, FlatList, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types'
import { getAll } from '../api/api';
const { width, height } = Dimensions.get('window');

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            data: ''
        }
    }
    filter(text) {
        const data = getAll()
        const newData = data.filter(function (item) {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData > -1);
        })
        this.setState({
            data: newData,
            text: text,
        })
    }
    deleteData() {
        this.setState({
            text: '',
            data: ''
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
            <View style={styles.contenedor}>
                <View style={styles.header}>
                    <Icon name="search" color="grey" size={20} style={styles.searchIcon} />
                    <TextInput value={this.state.text} onChangeText={(text) => this.filter(text)} style={styles.input} placeholder="Search" placeholderTextColor="grey" keyboardAppearance="dark" autoFocus />
                    {this.state.text ? <TouchableWithoutFeedback onPress={() => this.deleteData()}><Icon name="times-circle" color="grey" size={18} style={styles.iconInputClose} /></TouchableWithoutFeedback> : null}
                    <TouchableWithoutFeedback style={styles.cancelButon} onPress={() => this.props.navigator.pop()}>
                        <View style={styles.containerButon}>
                            <Text style={styles.cancelButonText} >Cancel</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList
                        style={{ marginHorizontal: 5 }}
                        data={this.state.data}
                        columnWrapperStyle={{ marginTop: 10, marginLeft: 10, }}
                        numColumns={3}
                        renderItem={({ item }) => this._renderItem(item)}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 50,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        top: 12,
        left: 15,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    iconInputClose: {
        position: 'absolute',
        top: 12,
        right: 150,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        width: width - (width / 4),
        height: 40,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3
    },
    cancelButonText: {
        color: 'white'
    },
    image: {
        marginRight: 5,
        width: width / 3,
        height: height / 3
    }
})

export default Search;