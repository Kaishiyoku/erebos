import authGet from '../request/authGet';

const systemLocationsRequest = (type = null, symbol) => authGet(`/game/systems/${symbol}/locations`, {type});

export default systemLocationsRequest;