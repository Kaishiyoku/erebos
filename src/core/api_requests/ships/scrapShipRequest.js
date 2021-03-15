import getUserName from '../../local_storage/getUserName';
import authDelete from '../../request/authDelete';

const scrapShipRequest = (shipId) => authDelete(`/users/${getUserName()}/ships/${shipId}`);

export default scrapShipRequest;