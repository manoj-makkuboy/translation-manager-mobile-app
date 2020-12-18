import React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { languageService } from '../../services/language/LanguageService';
import { callGetAllLanguages, callGetTranslation } from './action';
import { Picker } from '@react-native-picker/picker';

class SelectLanguage extends React.Component {
    state = {
        selectedLanguage: null
    }
    render() {
        if(this.props.loadingTranslation) {
            return this.renderLoader();
        }
        return (
            <View style={style.container}>
                <Text style={style.title}>
                    Please select your preferred language
                 </Text>
                {this.renderLanguagePicker()}
                <Button title="Continue" onPress={this.onPressContinue} />
            </View>
        )

    }


    renderLoader = () => {
        return (
            <View style={style.loadingTranslationContainer}>
                <ActivityIndicator size="large"/>
                <Text style={style.loadingText}>Loading selected language</Text>
            </View>
        )
    }

    renderLanguagePicker = () => {
        if (this.props.loadingLanguages) {
            return (
                <View style={style.loaderContainer}>
                    <ActivityIndicator size="large"/>
                    <Text style={style.loadingText}>Loading available languages</Text>
                </View>
            )
        } else {
            let allPickerItems = this.getAllPickerItem();
            return (
                <Picker
                    selectedValue={this.state.selectedLanguage}
                    style={{ height: 200, width: '80%', }}
                    mode="dropdown"
                    onValueChange={itemValue =>
                        this.setState({ selectedLanguage: itemValue })
                    }>
                    {allPickerItems}
                </Picker>
            )
        }
    }

    onPressContinue = () => {
        // Get translation data from api
        this.props.callGetTranslation();
        // this.props.navigation.replace("Home")
    }

    getAllPickerItem = () => {
        return this.props.languageList.map(languageItem => {
            return <Picker.Item key={languageItem} label={languageItem.toUpperCase()} value={languageItem} />
        })
    }

    componentDidMount() {
        this.props.callGetAllLanguages();
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
    },
    loaderContainer: {
        marginVertical: 16,
        height: 200,
        justifyContent:'center'
    },
    loadingText: {
        paddingVertical: 16
    },
    loadingTranslationContainer: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    }
})

const mapStateToProps = state => {
    return {
        languageList: state.LanguageReducer.languageList,
        loadingLanguages: state.LanguageReducer.loadingLanguages,
        loadingTranslation: state.LanguageReducer.loadingTranslation
    }
}

const mapDispatchToProps = dispatch => {
    return {
        callGetAllLanguages: () => {
            dispatch(callGetAllLanguages());
        },
        callGetTranslation: (langCode) => {
            dispatch(callGetTranslation(langCode));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage);