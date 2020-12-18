import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


class HomeScreen extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Text>{this.props.translation["hello_world"]}</Text>
                <Text>{this.props.translation["cancel"]}</Text>
                <Button onPress={() => {
                    this.props.navigation.replace('Select Language')
                }} title={this.props.translation["go_back_to_select_language"]} />
            </View>
        );
    }
    componentDidMount() {
        console.log('home didmount', this.props.translation);
    }
};


const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 16
    }
})


const mapStateToProps = state => {
    return {
        translation: state.LanguageReducer.translation
    }
}


export default connect(mapStateToProps, {})(HomeScreen);