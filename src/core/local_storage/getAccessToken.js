import {ACCESS_TOKEN} from '../constants';

const getAccessToken = () => atob(localStorage.getItem(ACCESS_TOKEN));

export default getAccessToken;