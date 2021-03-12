import authGet from '../request/authGet';
import getUserName from '../local_storage/getUserName';

const shipInfoRequest = (shipId) => authGet(`/users/${getUserName()}/ships/${shipId}`);

export default shipInfoRequest;