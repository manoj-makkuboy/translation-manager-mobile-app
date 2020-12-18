import { languageService } from "../../../services/language/LanguageService";
import {
    CALL_GET_LANGUAGES, CALL_GET_LANGUAGES_FAILURE, CALL_GET_LANGUAGES_SUCCESS,
    CALL_GET_TRANSLATION,
    CALL_GET_TRANSLATION_FAILURE,
    CALL_GET_TRANSLATION_SUCCESS
} from "./actionTypes"
import { StackActions } from '@react-navigation/native';
import { navigate, replace } from "../../../services/navigation/NavigationService";


export const callGetAllLanguages = () => {
    console.log('callGetL');
    return dispatch => {
        dispatch({ type: CALL_GET_LANGUAGES });
        languageService.getAllLanguages()
            .then(languages => {
                console.log('lang', languages);
                dispatch({
                    type: CALL_GET_LANGUAGES_SUCCESS,
                    languages
                })
            })
            .catch(error => {
                console.log('error->', error);
                dispatch({
                    type: CALL_GET_LANGUAGES_FAILURE
                })
            })
    }
}

export const callGetTranslation = (langCode) => {
    console.log('callGetT');
    return dispatch => {
        dispatch({ type: CALL_GET_TRANSLATION });
        languageService.getTranslation(langCode)
            .then(translation => {
                console.log('translation', translation);
                dispatch({
                    type: CALL_GET_TRANSLATION_SUCCESS,
                    translation
                });
                replace('Home')
            })
            .catch(error => {
                console.log('error->', error);
                dispatch({
                    type: CALL_GET_TRANSLATION_FAILURE
                })
            })
    }
}
