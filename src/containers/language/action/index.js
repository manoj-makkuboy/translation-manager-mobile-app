import { languageService } from "../../../services/language/LanguageService";
import { CALL_GET_LANGUAGES, CALL_GET_LANGUAGES_FAILURE, CALL_GET_LANGUAGES_SUCCESS } from "./actionTypes"

export const callGetAllLanguages = () => {
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
