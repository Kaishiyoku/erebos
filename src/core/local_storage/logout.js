import {ACCESS_TOKEN, USER_NAME} from '../constants';

const logout = (userName, accessToken) => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_NAME);
};

export default logout;