import authGet from '../request/authGet';
import getUserName from '../local_storage/getUserName';

const activeFlightPlanInfoRequest = (flightPlanId) => authGet(`/users/${getUserName()}/flight-plans/${flightPlanId}`);

export default activeFlightPlanInfoRequest;