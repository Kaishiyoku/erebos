import authGet from '../request/authGet';

const ownedShipsRequest = () => authGet('/game/ships');

export default ownedShipsRequest;