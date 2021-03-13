import getUserName from '../local_storage/getUserName';
import authPost from '../request/authPost';

const purchaseGoodRequest = (goodSymbol, quantity, shipId) => authPost(`/users/${getUserName()}/purchase-orders`, {good: goodSymbol, quantity, shipId});

export default purchaseGoodRequest;