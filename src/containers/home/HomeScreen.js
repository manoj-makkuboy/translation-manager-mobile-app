import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';


class HomeScreen extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ height: 48, width: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 24, backgroundColor: '#d8dde6' }}>
                            <FontistoIcon name="person" size={20} />
                        </View>
                        <Text style={style.hello}>{this.props.translation['HELLO_WORLD']}</Text>
                    </View>

                    <Text style={style.desc}>{this.props.translation['DESCRIPTION']}</Text>
                </View>
                <View style={style.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                        <View style={{ alignItems: 'center', }}>
                            <View style={{ height: 36, width: 36, justifyContent: 'center', alignItems: 'center', borderRadius: 24, backgroundColor: '#d8dde6' }}>
                                <MaterialCommunityIcons name="face" size={24} />
                            </View>
                            <Text style={style.profile}>{this.props.translation['PROFILE']}</Text>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <View style={{ height: 36, width: 36, justifyContent: 'center', alignItems: 'center', borderRadius: 24, backgroundColor: '#d8dde6' }}>
                                <Feather name="menu" size={20} />
                            </View>
                            <Text style={style.profile}>{this.props.translation['MENU']}</Text>
                        </View>

                        <View style={{ alignItems: 'center', }}>
                            <View style={{ height: 36, width: 36, justifyContent: 'center', alignItems: 'center', borderRadius: 24, backgroundColor: '#d8dde6' }}>
                                <Feather name="log-out" size={20} />
                            </View>
                            <Text style={style.profile}>{this.props.translation['LOG_OUT']}</Text>
                        </View>
                    </View>
                </View>
                <Text>{this.props.translation['CANCEL']}</Text>
                <Button onPress={() => {
                    this.props.navigation.replace('Select Language')
                }} title={this.props.translation["go_to_select_language"]} />
            </View>
        );
    }
    componentDidMount() {
        this.props.navigation.setOptions({title: this.props.translation["HOME"]})
    }
};


const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: '#d8dde6'
    },
    card: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        width: "100%",
        backgroundColor: '#fff',
        borderRadius: 6,
        marginVertical: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // alignItems:'center',
        elevation: 5,
    },
    hello: {
        fontSize: 36,
        color: 'black',
        fontWeight: 'bold',
        marginStart: 16,
        flex: 1
    },
    profile: {
        fontSize: 16,
        color: 'black',
        marginTop: 8
    },
    desc: {
        marginTop: 16,
        fontSize: 16,
        color: 'black',
    }
})


const mapStateToProps = state => {
    return {
        translation: state.LanguageReducer.translation
    }
}


export default connect(mapStateToProps, {})(HomeScreen);