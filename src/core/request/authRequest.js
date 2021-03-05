import request from './request';
import getAccessToken from '../local_storage/getAccessToken';

const authRequest = (method, uri, paramsOrData) => request(getAccessToken(), method, uri, paramsOrData);

export default authRequest;