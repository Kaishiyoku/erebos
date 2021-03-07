import authGet from '../request/authGet';

const availableShipsRequest = (shipClass = null) => authGet('/game/ships', {class: shipClass});

export default availableShipsRequest;