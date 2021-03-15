import {partial} from 'ramda';
import systemLocationsRequest from './systemLocationsRequest';

const systemAsteroidsRequest = partial(systemLocationsRequest, ['ASTEROID']);

export default systemAsteroidsRequest;