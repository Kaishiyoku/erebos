import withDefault from './withDefault';
import {compose} from 'ramda';

const stringifyJson = compose(JSON.stringify, withDefault);

export default stringifyJson;