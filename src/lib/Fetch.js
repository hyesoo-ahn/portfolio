import axios from 'axios';
import {URL} from "../constants/Consts";

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',
}


const axiosInstance = axios.create({
    baseURL        : URL.API_BASE_URL,
    timeout        : 6000,
});

const request = async (method, url,  data = {} ) => {


    try {
        const config = {
            url,
            method,
            headers: getDefaultHeader(contentType)
        }

        if (method === FetchConsts.GET) {
            config.params = data;
        } else {
            config.data = data;
        }


        console.log('@@[Request Config]',config);

        const result = await axiosInstance(config);


        return result.data;
    } catch (e) {
        if (e.response) {
            if (e.response.status === 401) {
                console.log('로그인 만료됨. 로그인으로 이동합니다');
            } else {
                console.log("e", e)
            }
        } else {
            console.log("e", e)
        }
    } finally {
        console.log("e", e)
    }

}

const FetchJson = {
    get: (url, data) => request(FetchConsts.GET, url, data),
    post: (url, data) => request(FetchConsts.POST, url, data),
    put: (url, data) => request(FetchConsts.PUT, url, data),
    delete: (url, data) => request(FetchConsts.DELETE, url, data),
}



export {FetchJson};