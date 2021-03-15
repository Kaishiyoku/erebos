import authGet from '../../request/authGet';

const allActiveFlightPlansInSystemRequest = (systemSymbol) => authGet(`/game/systems/${systemSymbol}/flight-plans`);

export default allActiveFlightPlansInSystemRequest;