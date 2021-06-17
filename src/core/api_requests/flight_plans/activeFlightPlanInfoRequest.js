import authGet from '../../request/authGet';

const activeFlightPlanInfoRequest = (flightPlanId) => authGet(`/my/flight-plans/${flightPlanId}`);

export default activeFlightPlanInfoRequest;