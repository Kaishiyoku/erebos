import authGet from '../request/authGet';

const locationMarketplaceRequest = (systemSymbol) => authGet(`/game/locations/${systemSymbol}/marketplace`);

export default locationMarketplaceRequest;