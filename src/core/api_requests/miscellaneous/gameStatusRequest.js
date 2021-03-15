import get from '../../request/get';

const gameStatusRequest = () => get('/game/status');

export default gameStatusRequest;