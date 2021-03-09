import {ACCESS_TOKEN} from '../constants';

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN) ? atob(localStorage.getItem(ACCESS_TOKEN)) : null;

export default getAccessToken;