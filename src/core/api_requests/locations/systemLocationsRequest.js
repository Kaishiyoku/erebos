import authGet from '../../request/authGet';

const systemLocationsRequest = (type = null, systemSymbol) => authGet(`/game/systems/${systemSymbol}/locations`, {type});

export default systemLocationsRequest;