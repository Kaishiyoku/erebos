import parseJson from '../json/parseJson';
import {compose} from 'ramda';
import getLocalStorageItem from './getLocalStorageItem';

const getLocalStorageItemAsJson = compose(parseJson, getLocalStorageItem);

export default getLocalStorageItemAsJson;