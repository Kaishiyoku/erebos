import authPost from '../../request/authPost';

const submitFlightPlanRequest = (destination, shipId) => authPost('/my/flight-plans', {destination, shipId});

export default submitFlightPlanRequest;