import React from 'react';
import {Button, Text, View} from 'react-native';


class HomeScreen extends React.Component {
    render() {
        return(
            <Button onPress={() => {
                this.props.navigation.replace('Select Language')
            }} title="Go Back to Select Language"/>
        );
    }
};

export default HomeScreen;