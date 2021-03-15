import authPost from '../../request/authPost';

const registerRequest = (userName) => authPost(`/users/${userName}/token`);

export default registerRequest;