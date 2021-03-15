import getUserName from '../../local_storage/getUserName';
import authPut from '../../request/authPut';

const payOffLoanRequest = (loanId) => authPut(`/users/${getUserName()}/loans/${loanId}`);

export default payOffLoanRequest;