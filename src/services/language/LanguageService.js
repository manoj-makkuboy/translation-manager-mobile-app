import { API_GET_ALL_LANGUAGE, API_GET_TRANSLATION } from "../../utils/NetworkConstants";
import BaseApiService from "../network/BaseApiService";

class LanguageService {
    getAllLanguages() {
        return BaseApiService.get(API_GET_ALL_LANGUAGE);
            // .then(res => {
            //     console.log('res-',res);
            // })
            // .catch(error => {
            //     console.log('error', error);
            // })
    }

    getTranslation(langCode) {
        return BaseApiService.get(`${API_GET_TRANSLATION}/${langCode}`)
    }
}


export let languageService = new LanguageService();