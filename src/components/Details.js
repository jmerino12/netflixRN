import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight, TouchableWithoutFeedback, ScrollView, Dimensions, Share, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TabsEpisodes from './TabsEpisodes'
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types'
import Orientation from 'react-native-orientation'


const { width, heigth } = Dimensions.get('window')
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            measuresTitle: 0,
            measuresSeason: 0,
            scrollY: new Animated.Value(0),
            currentSeason: 1
        }
    }
    componentWillMount() {
        Orientation.lockToPortrait();
    }
    onShare() {
        Share.share({
            title: 'Designated Survivor',
            url: 'www.youtube.com',
            message: 'Awesome Tv Show'
        }, {
            dialogTitle: 'Share this awesome content',
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]

        })
    }

    getSeason(season) {
        this.setState({
            currentSeason: season
        })
    }

    render() {
        // console.log(this.state.currentSeason)
        const headerNameToggle = this.state.scrollY.interpolate({
            inputRange: [this.state.measuresTitle, this.state.measuresTitle + 1],
            outputRange: [0, 1]
        })
        const headerSeasonHide = this.state.scrollY.interpolate({
            inputRange: [
                this.state.measuresSeason - 1,
                this.state.measuresSeason,
                this.state.measuresSeason + 1
            ],
            outputRange: [-width, 0, 0]
        })
        const headerSeasonToggle = this.state.scrollY.interpolate({
            inputRange: [this.state.measuresSeason, this.state.measuresSeason + 1],
            outputRange: [0, 1]
        })
        const { navigate } = this.props.navigation;
        const { params } = this.props.route;
        //console.log(params)
        const { episodes } = params.item.details
        const { name } = params.item;
        const { thumbnail, cast, description, year, creator, numOfEpisodes, season } = params.item.details;
        // console.log(episodes);
        return (

            <View style={{ flex: 1 }}>
                <Animated.View style={[styles.header, { opacity: headerNameToggle }]}>
                    <Text style={styles.headerText}>{name}</Text>
                </Animated.View>
                <Animated.View style={[styles.header, { opacity: headerSeasonToggle, transform: [{ translateY: 0 }, { translateX: headerSeasonHide }] }]}>
                    <TouchableHighlight onPress={() => navigate('EpisodesPicker', { getSeason: this.getSeason.bind(this), seasons: season, currentSeason: this.state.currentSeason })}>
                        <Text style={styles.headerText}>Season {this.state.currentSeason}</Text>
                    </TouchableHighlight>

                </Animated.View>
                < Animated.ScrollView style={styles.container} scrollEventThrottle={1}
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                            { useNativeDriver: true }
                        )
                    }>
                    <ImageBackground style={styles.thumbnail} source={{ uri: thumbnail }}>
                        <TouchableWithoutFeedback onPress={() => navigate('Video', { name: name })}>
                            <View style={styles.bottonPlay}>
                                <Icon style={styles.iconPlay} name="play-circle" size={90} color="white" />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.nameContainer} onLayout={({ nativeEvent }) => {
                            this.setState({
                                measuresTitle: nativeEvent.layout.y
                            })
                        }} >

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
                            <TouchableHighlight onPress={this.onShare}>
                                <View style={styles.myShareIcon}>
                                    <Icon style={styles.shareIcon}
                                        name="share-alt"
                                        color="grey"
                                        size={25}
                                    />
                                    <Text style={styles.text}>Share</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View onLayout={({ nativeEvent }) => {
                        this.setState({
                            measuresSeason: nativeEvent.layout.y + 8
                        })
                    }}>
                        <TabsEpisodes
                            seasons={season}
                            getSeason={this.getSeason.bind(this)}
                            navigation={this.props.navigation}
                            data={episodes}
                            currentSeason={this.state.currentSeason}
                        />
                    </View>

                </Animated.ScrollView >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    headerText: {
        color: 'white',
        fontSize: 20
    },
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