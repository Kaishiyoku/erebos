import formatNumber from './formatNumber';
import {partial} from 'ramda';

const formatInteger = partial(formatNumber, ['0,0']);

export default formatInteger;