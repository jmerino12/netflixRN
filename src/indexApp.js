import React, { Component } from 'react';
import {
    Navigator
} from 'react-native-deprecated-custom-components'
import App from '../App';
import Search from './components/Search'
import Details from './components/Details';
import { Text, View } from 'react-native';
import buildStyleInterpolator from 'react-native/Libraries/Utilities/buildStyleInterpolator';


const noTransition = {
    opacity: {
        from: 1,
        to: 1,
        min: 1,
        max: 1,
        type: 'linear',
        extrapolate: false,
        round: 100
    }
}

class IndexApp extends Component {
    _renderScener(route, navigator) {
        var navigator = { navigator }
        switch (route.ident) {
            case 'App':
                return (
                    <App {...navigator} />
                )
            case 'Search':
                return (
                    <Search  {...navigator} />
                )
            case 'Details':
                return (
                    <Details  {...navigator}{...route.passProps} />
                )

        }
    }

    _configureScene(route, routeStack) {
        switch (route.ident) {
            case 'Search':
                return {
                    ...Navigator.SceneConfigs.FloatFromLeft,
                    gestures: null,
                    defaultTransitionVelocity: 100,
                    animationInterpolators: {
                        into: buildStyleInterpolator(noTransition),
                        out: buildStyleInterpolator(noTransition),
                    },
                }
            case 'Details':
                return {
                    ...Navigator.SceneConfigs.FloatFromLeft,
                    gestures: null,
                    defaultTransitionVelocity: 100,
                    animationInterpolators: {
                        into: buildStyleInterpolator(noTransition),
                        out: buildStyleInterpolator(noTransition),
                    },
                }


            default:
                break;
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{ ident: 'App' }}
                renderScene={this._renderScener}
                configureScene={this._configureScene}
            />
        )
    }
}

export default IndexApp;