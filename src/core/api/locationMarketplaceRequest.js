import authGet from '../request/authGet';

const locationMarketplaceRequest = (symbol) => authGet(`/game/locations/${symbol}/marketplace`);

export default locationMarketplaceRequest;