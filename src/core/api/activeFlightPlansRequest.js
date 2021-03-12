import authGet from '../request/authGet';

const activeFlightPlansRequest = (systemSymbol) => authGet(`/game/systems/${systemSymbol}/flight-plans`);

export default activeFlightPlansRequest;