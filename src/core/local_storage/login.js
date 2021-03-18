import {ACCESS_TOKEN, USER_NAME} from '../constants';
import setLocalStorageItem from './setLocalStorageItem';

const login = (userName, accessToken) => {
    setLocalStorageItem(ACCESS_TOKEN, btoa(accessToken));
    setLocalStorageItem(USER_NAME, btoa(userName));
};

export default login;