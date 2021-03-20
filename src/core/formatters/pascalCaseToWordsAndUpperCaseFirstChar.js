import pascalCaseToWords from './pascalCaseToWords';
import upperCaseFirstChar from './upperCaseFirstChar';
import {compose} from 'ramda';

const pascalCaseToWordsAndUpperCaseFirstChar = compose(upperCaseFirstChar, pascalCaseToWords);

export default pascalCaseToWordsAndUpperCaseFirstChar;