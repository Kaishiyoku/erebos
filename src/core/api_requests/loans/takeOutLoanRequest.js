import authPost from '../../request/authPost';
import getUserName from '../../local_storage/getUserName';

const takeOutLoanRequest = (type) => authPost(`/users/${getUserName()}/loans`, {type});

export default takeOutLoanRequest;