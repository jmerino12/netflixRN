import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types'

class Episodes extends Component {
    renderEpisodes() {
        const { currentSeason } = this.props
        return this.props.data.filter(function (element) {
            return element.season == currentSeason
        }).map((item, i) => {
            const img = item.image == null ? 'https://static.tvmaze.com/uploads/images/medium_landscape/76/190262.jpg' : item.image.medium;
            return (
                <View style={styles.video} key={i} >
                    <View style={styles.videoEpisode}>
                        <ImageBackground source={{ uri: img }} style={styles.image}>
                            <View style={styles.buttonPlay}>
                                <TouchableWithoutFeedback>
                                    <View style={{ backgroundColor: 'transparent' }}>
                                        <Icon
                                            style={styles.iconPlay}
                                            name="play-circle"
                                            size={30}
                                            color="white"
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </ImageBackground>
                        <View style={styles.episodeName}>
                            <Text style={styles.text} >{item.number}. {item.name}</Text>
                            <Text style={styles.text}>{item.runtime}</Text>
                        </View>
                    </View>
                    <Text style={styles.summary}>{item.summary}</Text>
                </View>
            )
        })

    }
    render() {
        console.log(this.props)
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                {this.props.seasons == 1 ? <TouchableWithoutFeedback>
                    <View>
                        <Text style={styles.buttonText}>Season {this.props.currentSeason}</Text>
                    </View>
                </TouchableWithoutFeedback> : <TouchableWithoutFeedback onPress={() => navigate('EpisodesPicker',
                    { getSeason: this.props.getSeason, seasons: this.props.seasons, currentSeason: this.props.currentSeason }
                )}>
                        <View style={styles.buttonWithIcon}>
                            <Text style={styles.buttonText}>Season {this.props.currentSeason}</Text>
                            <Icon
                                style={styles.iconDown}
                                name="chevron-down"
                                color="white"
                                size={10}
                            />
                        </View>
                    </TouchableWithoutFeedback>}
                <View style={styles.renderEpisodes}>
                    {this.renderEpisodes()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    buttonWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white'
    },
    iconDown: {
        marginLeft: 5
    },
    renderEpisodes: {
        marginTop: 10
    },
    image: {
        width: 150,
        height: 80,
        marginRight: 10
    },
    buttonPlay: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    episodeName: {
        justifyContent: 'center'
    },
    videoEpisode: {
        flexDirection: 'row'
    },
    text: {
        color: 'white'
    },
    summary: {
        color: 'grey',
        marginVertical: 10
    }
})
export default Episodes;