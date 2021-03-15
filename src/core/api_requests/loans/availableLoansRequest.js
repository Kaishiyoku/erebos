import authGet from '../../request/authGet';

const availableLoansRequest = () => authGet('/game/loans');

export default availableLoansRequest;