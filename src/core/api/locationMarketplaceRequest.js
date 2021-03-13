import authGet from '../request/authGet';

const locationMarketplaceRequest = (locationSymbol) => authGet(`/game/locations/${locationSymbol}/marketplace`);

export default locationMarketplaceRequest;