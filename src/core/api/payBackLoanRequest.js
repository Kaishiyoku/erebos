import getUserName from '../local_storage/getUserName';
import authPut from '../request/authPut';

const payBackLoanRequest = (loanId) => authPut(`/users/${getUserName()}/loans/${loanId}`);

export default payBackLoanRequest;