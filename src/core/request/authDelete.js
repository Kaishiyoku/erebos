import {partial} from 'ramda';
import authRequest from './authRequest';

const authDelete = partial(authRequest, ['delete']);

export default authDelete;