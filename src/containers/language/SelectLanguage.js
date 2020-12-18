import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { languageService } from '../../services/language/LanguageService';


class SelectLanguage extends React.Component {
    state = {
        country: 'uk',
        languages: []
    }
    render() {
        return (
            <View style={style.container}>
                <Text>
                    This is select language screen
                 </Text>

                <DropDownPicker
                    items={[
                        { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true },
                        { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                        { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                    ]}
                    defaultValue={this.state.country}
                    containerStyle={{ height: 40 }}
                    style={{ backgroundColor: '#fafafa' }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => this.setState({
                        country: item.value
                    })}
                />
            </View>
        )
    }
    componentDidMount() {  
        languageService.getAllLanguages().then(res => {
            console.log('res', res);
           
        })
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
    }
})

export default SelectLanguage