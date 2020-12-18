import { ActionSheetIOS } from "react-native";
import { CALL_GET_LANGUAGES, CALL_GET_LANGUAGES_SUCCESS } from "../action/actionTypes";

const intialState = {
    languageList: [],
    loadingLanguages: false,
    error: null
};

const languageReducer = (state = intialState, action) => {
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
        default:
            return state;
    }
}

export default languageReducer;