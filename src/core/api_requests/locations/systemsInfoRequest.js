import authGet from '../../request/authGet';

const systemsInfoRequest = () => authGet('/game/systems');

export default systemsInfoRequest;