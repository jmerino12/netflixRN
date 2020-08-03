import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation'
import PropTypes from 'prop-types'

class VideoPlayerView extends Component {
    componentWillMount() {
        Orientation.lockToLandscape();
    }
    render() {
        return (
            <View style={styles.container}>
                <VideoPlayer source={require('../videos/video.mp4')}
                    title={"Designated Survivor"}
                    onBack={() => null}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default VideoPlayerView;