import {compose, join, split, toLower} from 'ramda';

const pascalCaseToWords = (str) => compose(toLower, join(' '), split('_'))(str);

export default pascalCaseToWords;