import setLocalStorageItem from './setLocalStorageItem';
import stringifyJson from '../json/stringifyJson';

const setLocalStorageItemAsJson = (key, value) => setLocalStorageItem(key, stringifyJson(value));

export default setLocalStorageItemAsJson;