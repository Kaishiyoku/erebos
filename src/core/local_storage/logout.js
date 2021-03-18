import {ACCESS_TOKEN, USER_NAME} from '../constants';
import removeLocalStorageItem from './removeLocalStorageItem';

const logout = () => {
    removeLocalStorageItem(ACCESS_TOKEN);
    removeLocalStorageItem(USER_NAME);
};

export default logout;