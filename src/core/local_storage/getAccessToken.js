import {ACCESS_TOKEN} from '../constants';
import getLocalStorageItem from './getLocalStorageItem';
import callIfNotEmpty from '../callIfNotEmpty';

const getAccessToken = () => callIfNotEmpty(atob, getLocalStorageItem(ACCESS_TOKEN));

export default getAccessToken;