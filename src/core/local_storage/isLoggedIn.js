import {ACCESS_TOKEN} from '../constants';

const isLoggedIn = () => localStorage.getItem(ACCESS_TOKEN);

export default isLoggedIn;