import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { languageService } from '../../services/language/LanguageService';
import { callGetAllLanguages } from './action';
import {Picker} from '@react-native-picker/picker';

class SelectLanguage extends React.Component {
    state = {
        selectedLanguage: null
    }
    render() {
        let allPickerItems = this.getAllPickerItem();
        return (
            <View style={style.container}>
                <Text style={style.title}>
                    Please select your preferred language
                 </Text>
                <Picker
                    selectedValue={this.state.selectedLanguage}
                    style={{ height: 200, width: '80%',}}
                    mode="dropdown"
                    onValueChange={itemValue =>
                        this.setState({ selectedLanguage: itemValue })
                    }>
                    {allPickerItems}
                </Picker>
                <Button title="Continue" onPress={this.onPressContinue}/>
            </View>
        )

    }


    onPressContinue = () => {
        this.props.navigation.replace("Home")
    }

    getAllPickerItem = () => {
        return this.props.languageList.map(languageItem => {
            return <Picker.Item key={languageItem} label={languageItem.toUpperCase()} value={languageItem} />
        })
    }

    componentDidMount() {
        this.props.callGetAllLanguages();
    }
    componentDidUpdate() {
        console.log('lang list', this.props.languageList);
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 16
    },
    title: {
        fontSize: 16
    }
})

const mapStateToProps = state => {
    return {
        languageList: state.LanguageReducer.languageList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        callGetAllLanguages: () => {
            dispatch(callGetAllLanguages());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage);