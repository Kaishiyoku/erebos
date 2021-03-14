import formatNumber from './formatNumber';
import {partial} from 'ramda';

const formatDecimal = partial(formatNumber, ['0,0.00']);

export default formatDecimal;