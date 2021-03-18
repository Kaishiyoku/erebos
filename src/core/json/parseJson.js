import withDefault from '../withDefault';

const parseJson = (str) => {
    try {
        return JSON.parse(withDefault(str));
    } catch (e) {
        return null;
    }
};

export default parseJson;