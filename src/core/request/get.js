import {partial} from 'ramda';
import request from './request';

const get = partial(request, ['get']);

export default get;