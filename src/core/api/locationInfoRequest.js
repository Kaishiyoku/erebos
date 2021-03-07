import authGet from '../request/authGet';

const locationInfoRequest = (symbol) => authGet(`/game/locations/${symbol}`);

export default locationInfoRequest;