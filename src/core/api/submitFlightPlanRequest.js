import getUserName from '../local_storage/getUserName';
import authPost from '../request/authPost';

const submitFlightPlanRequest = (destination, shipId) => authPost(`/users/${getUserName()}/flight-plans`, {destination, shipId});

export default submitFlightPlanRequest;