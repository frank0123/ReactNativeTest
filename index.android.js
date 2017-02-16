/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is the Hello World in React Native, enjoy it!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
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
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
*/


//an example of login page

'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';


class ReactNativeDemo extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle = {{flex: 1}} keyboardDismissMode = 'on-drag' keyboardShouldPersistTaps = {false}>
                <View style = {styles.container}>
                    <Image
                        style = {styles.logo}
                        source = {{uri: 'http://oss-hz.qianmi.com/qianmicom/u/cms/qmwww/201511/03102524l6ur.png'}} />

                    <TextInput
                        style = {styles.input}
                        placeholder = '用户名'
                        ref = {(username) => this.username = username}
                        onFocus = {() => this.username.focus()} />

                    <TextInput
                        style = {styles.input}
                        password = {true}
                        placeholder = '密   码'
                        ref = {(password) => this.password = password}
                        onFocus = {() => this.password.focus()} />

                    <TouchableOpacity style = {styles.loginBtn} onPress={() => console.log('press me')}>
                        <Text style = {styles.loginText}>登录</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },

    logo: {
        width: 160,
        height: 160,
        marginTop: 25
    },

    input: {
        marginTop: 20,
        width: 320,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightblue'
    },

    loginBtn: {
        marginTop: 40,
        height: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3333FF'
    },

    loginText: {
        fontSize: 14,
        color: '#FFF' ,
        fontWeight: 'bold'
    }
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);