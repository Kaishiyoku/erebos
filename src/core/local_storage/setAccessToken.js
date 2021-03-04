import {ACCESS_TOKEN} from '../constants';

const setAccessToken = (accessToken) => localStorage.setItem(ACCESS_TOKEN, accessToken);

export default setAccessToken;