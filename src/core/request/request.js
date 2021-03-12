import axios from 'axios';
import {partial} from 'ramda';
import {API_BASE_URL} from '../constants';
import {toast} from 'react-toastify';

function baseRequest(baseUrl, accessToken, method, uri, paramsOrData) {
    const params = method === 'get' ? paramsOrData : {};
    const data = ['post', 'put'].includes(method) ? paramsOrData : {};

    return new Promise((resolve, reject) => {
        axios.request({
            baseURL: baseUrl,
            data,
            headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
            method,
            params,
            url: uri,
        })
            .then(resolve)
            .catch((error) => {
                toast.error(error.response.data.message);

                reject(error);
            });
    });
}

const request = partial(baseRequest, [API_BASE_URL]);

export default request;