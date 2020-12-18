import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './containers/home/HomeScreen';
import SelectLanguage from './containers/language/SelectLanguage';


const HomeStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Select Language" component={SelectLanguage}/>
        <HomeStack.Screen name="Home" component={HomeScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
