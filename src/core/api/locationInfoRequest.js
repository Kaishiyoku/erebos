import authGet from '../request/authGet';

const locationInfoRequest = (systemSymbol) => authGet(`/game/locations/${systemSymbol}`);

export default locationInfoRequest;