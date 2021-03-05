import {partial} from 'ramda';
import request from './request';

const post = partial(request, ['post']);

export default post;