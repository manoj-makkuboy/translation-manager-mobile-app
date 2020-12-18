import { ActionSheetIOS } from "react-native";
import { CALL_GET_LANGUAGES, CALL_GET_LANGUAGES_SUCCESS, 
    CALL_GET_TRANSLATION, CALL_GET_TRANSLATION_SUCCESS } from "../action/actionTypes";

import defaultTranslation from '../../../assets/en.json'

const intialState = {
    languageList: [],
    translation: defaultTranslation,
    loadingLanguages: false,
    loadingTranslation: false,
    error: null
};

const languageReducer = (state = intialState, action) => {
    console.log('action', action.type);
    switch (action.type) {
        case CALL_GET_LANGUAGES:
            return {
                ...state,
                loadingLanguages: true,
                error: null
            }
        case CALL_GET_LANGUAGES_SUCCESS:
            return {
                ...state,
                languageList: action.languages,
                loadingLanguages: false
            }
        case CALL_GET_TRANSLATION:
            return {
                ...state,
                loadingTranslation: true,
                error: null
            }
        case CALL_GET_TRANSLATION_SUCCESS:
            return {
                ...state,
                translation: {...defaultTranslation, ...action.translation},
                loadingTranslation: false
            }
        default:
            return state;
    }
}

export default languageReducer;