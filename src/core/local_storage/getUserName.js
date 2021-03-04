import {USER_NAME} from '../constants';

const getUserName = () => atob(localStorage.getItem(USER_NAME));

export default getUserName;