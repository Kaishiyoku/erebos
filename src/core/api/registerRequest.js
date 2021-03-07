import authPost from '../request/authPost';
import getUserName from '../local_storage/getUserName';

const registerRequest = (userName) => authPost(`/users/${userName()}/token`);

export default registerRequest;