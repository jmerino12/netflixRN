import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view';
import Episodes from './Episodes';
import Trailers from './Trailers';
import PropTypes from 'prop-types'

class TabsEpisodes extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props.data)
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'Episodes' },
                { key: '2', title: 'Trailers & More' }
            ]
        }
    }

    _handleChangeTab(index) {
        this.setState({ index })
    }
    _renderHeader(props) {
        return <TabBar {...props} style={{ backgroundColor: 'transparent', elevación: 0, borderBottomWidth: 1, height: 50 }}
            // labelStyle={{ color: 'white', fontSize: 18, fontWeight: 'normal' }}
            indicatorStyle={{ backgroundColor: 'red', height: 4, top: 0 }} />

    }
    _renderScene({ route }) {
        switch (route.key) {
            case '1':
                return <Episodes data={this.props.data}
                />
            case '2':
                return <Trailers />
            default:
                return null
        }
    }
    render() {
        return (
            <TabView
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene.bind(this)}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleChangeTab.bind(this)}
                TabView renderTabBar={this._renderHeader}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'black'
    },
})

export default TabsEpisodes