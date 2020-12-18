import { combineReducers } from 'redux';


const rootReducer = () => {
    // define all reducers here
    const LanguageReducer = require('./containers/language/reducers/LanugageReducer').default;
    return combineReducers({
        LanguageReducer: LanguageReducer
    });
};

export default rootReducer;