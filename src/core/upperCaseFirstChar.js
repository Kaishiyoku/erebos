import {splitAt, toUpper} from 'ramda';

const upperCaseFirstChar = (str) => {
    const [firstChar, ...restCharsStr] = splitAt(1, str);

    return `${toUpper(firstChar)}${restCharsStr}`;
};

export default upperCaseFirstChar;