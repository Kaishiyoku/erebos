import {partial} from 'ramda';
import authRequest from './authRequest';

const get = partial(authRequest, ['get']);

export default get;