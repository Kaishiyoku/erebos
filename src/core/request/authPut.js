import {partial} from 'ramda';
import authRequest from './authRequest';

const authPut = partial(authRequest, ['put']);

export default authPut;