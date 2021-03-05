import axios from 'axios';
import {partial} from 'ramda';
import {API_BASE_URL} from '../constants';

function baseRequest(baseUrl, accessToken, method, uri, paramsOrData) {
    const params = method === 'get' ? paramsOrData : {};
    const data = ['post', 'put'].includes(method) ? paramsOrData : {};

    return axios.request({
        baseURL: baseUrl,
        data,
        headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
        method,
        params,
        url: uri,
    });
}

const request = partial(baseRequest, [API_BASE_URL]);

export default request;