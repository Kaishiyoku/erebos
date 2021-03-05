import {partial} from 'ramda';
import authRequest from './authRequest';

const authPost = partial(authRequest, ['post']);

export default authPost;