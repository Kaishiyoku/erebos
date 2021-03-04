import {ACCESS_TOKEN, USER_NAME} from '../constants';

const login = (userName, accessToken) => {
    localStorage.setItem(ACCESS_TOKEN, btoa(accessToken));
    localStorage.setItem(USER_NAME, btoa(userName));
};

export default login;