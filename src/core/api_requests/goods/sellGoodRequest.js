import getUserName from '../../local_storage/getUserName';
import authPost from '../../request/authPost';

const sellGoodRequest = (good, quantity, shipId) => authPost(`/users/${getUserName()}/sell-orders`, {good, quantity, shipId});

export default sellGoodRequest;