import getUserName from '../../local_storage/getUserName';
import authPost from '../../request/authPost';

const purchaseShipRequest = (type, location) => authPost(`/users/${getUserName()}/ships`, {location, type});

export default purchaseShipRequest;