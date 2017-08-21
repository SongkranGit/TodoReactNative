'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button,
    NativeModules
} from 'react-native';
import ProgressBar from './progressbar';

var toastAndroidTutorial = NativeModules.ToastAndroidTutorial;



export  default  class AwesomeNativeBase extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};

    }

    handleClick = () => {
        console.log('okkkkk')
        toastAndroidTutorial.show('Awesome', 5000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    React code
                </Text>
                <Text style={styles.instructions}>
                    This is coming straight from JS world!
                </Text>

                <ProgressBar
                    progress={0}
                    indeterminate={true}
                    style={styles.progressBar} />

                <View/>

                <Button
                    onPress={this.handleClick}
                    title="My Custom Native Module"
                    color="#19c91b"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#1934af',
        marginBottom: 5,
    },
    progressBar: {
        height: 50,
        // flex: 1,
        margin: 20,
        opacity : 0.9,
        width: Dimensions.get('window').width - 2 * 20,
    },
});




AppRegistry.registerComponent('AwesomeNativeBase', () => AwesomeNativeBase);
