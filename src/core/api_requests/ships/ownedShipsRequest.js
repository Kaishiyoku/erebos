import authGet from '../../request/authGet';
import getUserName from '../../local_storage/getUserName';

const ownedShipsRequest = () => authGet(`/users/${getUserName()}/ships`);

export default ownedShipsRequest;