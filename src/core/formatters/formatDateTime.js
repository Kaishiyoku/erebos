import {format} from 'date-fns';
import {partialRight} from 'ramda';

const formatDateTime = partialRight(format, ['yyyy/MM/dd HH:mm']);

export default formatDateTime;