import {USER_NAME} from '../constants';
import callIfNotEmpty from '../callIfNotEmpty';
import getLocalStorageItem from './getLocalStorageItem';

const getUserName = () => callIfNotEmpty(atob, getLocalStorageItem(USER_NAME));

export default getUserName;