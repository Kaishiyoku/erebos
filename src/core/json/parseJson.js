import withDefault from './withDefault';

const parseJson = (str) => JSON.parse(withDefault(str));

export default parseJson;