import { HOST_URL, HTTP_SUCCESS_CODE, HTTP_AUTH_ERROR, HTTP_NOT_FOUND_ERROR } from '../../utils/NetworkConstants';
const RequestMethod = {
    GET: 'GET',
    POST: 'POST',
}

const getHeaders = () => {
    return {
        'Content-Type': 'application/json'
    }
};

const get = (url, headers) => {
    return callApi(RequestMethod.GET, url, headers);
}

const post = (url, data, header) => {
    return callApi(RequestMethod.POST, url, header, data);
}

const callApi = (requestMethod, url, headers = getHeaders(), data) => {
    let requestInit = {
        headers: headers,
        method: requestMethod
    };

    return fetch(`${HOST_URL}${url}`, requestInit)
        .then(response => {
            console.log('response->', response);
            return handleApiResponse(response)
        })
        .catch(error => {
            console.log('error-->', error.message);
            throw error;
        })

};

const handleApiResponse = (response) => {
    if (response.status === HTTP_SUCCESS_CODE) {
        return response.json()
            .then(result => {
                return result;
            })
            .catch(error => {
                console.log('json parsing error-->', error);
                throw new Error("Invalid response");
            })
    }
    switch (response.status) {
       case HTTP_AUTH_ERROR: 
            // authorization failed
            // console.log('error-->', error)
            throw new Error("Please check your API Key");
        case HTTP_NOT_FOUND_ERROR:
            // page not found error
            // console.log('error-->', error);
            throw new Error("Server not found. Please try again.");
        default:
            throw new Error("Something went wrong. Please try again.");
    }
}

export default {
    get, post
}
