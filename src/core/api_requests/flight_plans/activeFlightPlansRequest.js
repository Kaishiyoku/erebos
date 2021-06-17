import authGet from '../../request/authGet';

const activeFlightPlansRequest = () => authGet('/my/flight-plans');

export default activeFlightPlansRequest;