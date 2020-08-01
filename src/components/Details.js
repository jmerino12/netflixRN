import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TabsEpisodes from './TabsEpisodes'
import LinearGradient from 'react-native-linear-gradient';
const { width, heigth } = Dimensions.get('window')
class Details extends Component {
    render() {
        const { episodes } = this.props.item.item.details
        const { name } = this.props.item.item;
        const { thumbnail, cast, description, year, creator, numOfEpisodes, season } = this.props.item.item.details;
        // console.log(episodes);
        return (
            <ScrollView style={styles.container}>
                <ImageBackground style={styles.thumbnail} source={{ uri: thumbnail }}>
                    <TouchableWithoutFeedback onPress={null}>
                        <View style={styles.bottonPlay}>
                            <Icon style={styles.iconPlay} name="play-circle" size={90} color="white" />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.nameContainer}>
                        <LinearGradient colors={['transparent', '#181818', '#181818']} >
                            <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                        </LinearGradient>
                    </View>
                </ImageBackground>
                <View style={styles.descriptionContainer}>
                    <View style={[styles.subtitle, styles.subtitleText]}>
                        <Text style={[styles.text, styles.subtitleText]} >{year}</Text>
                        <Text style={[styles.text, styles.subtitleText]}>{numOfEpisodes}</Text>
                        <Text style={[styles.text, styles.subtitleText]}>{season} Season</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={[styles.text, styles.ligth]}>{description}</Text>
                    </View>
                    <Text style={[styles.text, styles.subtitleText]}>Cast: {cast}</Text>
                    <Text style={[styles.text, styles.subtitleText]}>Creator: {creator}</Text>
                    <View style={styles.shareListIcons}>
                        <View style={styles.myListIcon}>
                            <IonIcons name="md-checkmark" color="grey" size={25} style={styles.listIcon} />
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <View style={styles.myShareIcon}>
                            <Icon style={styles.shareIcon}
                                name="share-alt"
                                color="grey"
                                size={25}
                            />
                            <Text style={styles.text}>Share</Text>
                        </View>
                    </View>
                </View>
                <TabsEpisodes data={episodes} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent'
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: "#181818"
    },
    thumbnail: {
        width: width,
        height: 300
    },
    bottonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    iconPlay: {
        opacity: 0.7
    },
    descriptionContainer: {
        paddingHorizontal: 20,

    },
    subtitle: {
        flexDirection: 'row',
    },
    subtitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons: {
        flexDirection: 'row',
        marginVertical: 30
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginVertical: 10,
    },
    ligth: {
        fontWeight: '200'
    }
})
export default Details;