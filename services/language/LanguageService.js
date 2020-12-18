import { API_GET_ALL_LANGUAGE } from "../../utils/NetworkConstants";
import BaseApiService from "../network/BaseApiService";

class LanguageService {
    getAllLanguages() {
        BaseApiService.get(API_GET_ALL_LANGUAGE)
            .then(res => {
                console.log('res-',res);
            })
            .catch(error => {
                console.log('error', error);
            })
    }
}


export let languageService = new LanguageService();