import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    Navigator
} from 'react-native-deprecated-custom-components'
import App from '../App';
import Search from './components/Search'
import Details from './components/Details';
import { Text, View } from 'react-native';
import buildStyleInterpolator from 'react-native/Libraries/Utilities/buildStyleInterpolator';
import Video from './components/VideoPlayerView'
import EpisodesPicker from './components/EpisodesPicker';
import Episodes from './components/Episodes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function IndexApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={App} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Video" component={Video} />
                <Stack.Screen name="EpisodesPicker" component={EpisodesPicker} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default IndexApp;