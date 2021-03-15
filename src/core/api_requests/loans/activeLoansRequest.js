import authGet from '../../request/authGet';
import getUserName from '../../local_storage/getUserName';

const activeLoansRequest = () => authGet(`/users/${getUserName()}/loans`);

export default activeLoansRequest;