import authGet from '../request/authGet';
import getUserName from '../local_storage/getUserName';

const activeFlightPlansRequest = () => authGet(`/users/${getUserName()}/flight-plans`);

export default activeFlightPlansRequest;