/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/rootReducer';
// import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
// import { persistStore } from 'redux-persist';


// config store
let middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer(), middleware);
// let persistor = persistStore(store);
class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}


AppRegistry.registerComponent(appName, () => Index);
