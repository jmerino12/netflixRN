import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
const { width, heigth } = Dimensions.get('window');

class Menu extends Component {
    render() {
        return (
            <View style={style.menu}>
                <View style={style.avatarContainer}>
                    <View style={style.avatarImage}>
                        <Image source={require('../images/user.png')} style={style.avatar} />
                        <Text style={style.text} >Jonathan</Text>
                    </View>
                    <Icon name="exchange"
                        color="white"
                        size={25}
                    />
                </View>
                <ScrollView style={style.scrollContainer}>
                    <View style={style.textWithIcon}>
                        <View style={style.withIcon}>
                            <Icon style={style.iconWithText} name="download" color="white" size={28} />
                            <Text style={style.text}>My downloads</Text>
                        </View>
                        <Icon style={style.rigthIcon}
                            name="angle-right"
                            color="white"
                            size={25}
                        />
                    </View>

                    <View style={style.textWithIcon}>
                        <View style={style.withIcon}>
                            <IonIcons style={style.iconWithText} name="md-checkmark" color="white" size={28} />
                            <Text style={style.text}>My List</Text>
                        </View>
                        <Icon style={style.rigthIcon}
                            name="angle-right"
                            color="white"
                            size={25}
                        />
                    </View>
                    <View style={[style.items, style.itemSelected]}>
                        <Text style={style.text}>Home</Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>Aviable for Dowmload</Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>Netflix Origianl</Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>Tv Shows</Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>Actions & Adventure</Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>Children & Family Movies</Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>Comedies</Text>
                    </View>
                    <View style={style.noSelectedItems}>
                        <Text style={style.text}>Documentaries</Text>
                    </View>

                </ScrollView>
            </View>
        )
    }
}
const style = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: heigth,
        backgroundColor: '#191919'
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 55,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20

    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20
    },
    avatarImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 3
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scrollContainer: {
        width: width / 2 + 59,

    },
    rigthIcon: {
        paddingRight: 20
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
    items: {
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    noSelectedItems: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5
    }


})
export default Menu;