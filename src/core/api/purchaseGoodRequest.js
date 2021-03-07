import getUserName from '../local_storage/getUserName';
import authPost from '../request/authPost';

const purchaseGoodRequest = (good, quantity, shipId) => authPost(`/users/${getUserName()}/purchase-orders`, {good, quantity, shipId});

export default purchaseGoodRequest;