import React from 'react';
import {Button, Text, View} from 'react-native';


class HomeScreen extends React.Component {
    render() {
        return(
            <Button onPress={() => {
                this.props.navigation.navigate('Home')
            }} title="Go to Home"/>
        );
    }
};

export default HomeScreen;