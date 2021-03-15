import getUserName from '../../local_storage/getUserName';
import authGet from '../../request/authGet';

const ownUserInfoRequest = () => authGet(`/users/${getUserName()}`);

export default ownUserInfoRequest;