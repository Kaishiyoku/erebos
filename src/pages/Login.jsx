import {Link, useNavigate} from '@reach/router';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import login from '../core/local_storage/login';

function Login() {
    const navigate = useNavigate();
    const {register, handleSubmit, watch, errors} = useForm();

    const sendCheckUserRequest = ({userName, accessToken}) => axios.get(`https://api.spacetraders.io/users/${userName}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }).then((response) => {
        login(userName, accessToken);

        navigate('/dashboard');
    }).catch((error) => {
        // TODO: handle error
    });

    return (
        <div className="mx-auto w-full max-w-sm bg-white shadow-md rounded text-left">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white">
                <div className="font-bold text-xl px-6 py-4">Login</div>

                <div className="px-6 pb-4">
                    <form onSubmit={handleSubmit(sendCheckUserRequest)}>
                        <div className="mb-4">
                            <label htmlFor="userName" className="block text-sm font-bold mb-2">User name</label>
                            <input ref={register} type="text" name="userName" className="rounded outline-none px-3 py-2 shadow border w-full text-gray-700 leading-tight transition-all duration-200 focus:border-blue-300 focus:ring focus:ring-blue-100 focus:ring-opacity-50"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="accessToken" className="block text-sm font-bold mb-2">Access token</label>
                            <input ref={register} type="password" name="accessToken" className="rounded outline-none px-3 py-2 shadow border w-full text-gray-700 leading-tight transition-all duration-200 focus:border-blue-300 focus:ring focus:ring-blue-100 focus:ring-opacity-50"/>
                        </div>

                        <div className="flex justify-between space-x-2">
                            <button type="submit" className="text-left text-blue-600 shadow-md border border-blue-300 bg-white rounded-full transition-all duration-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none px-4 py-2">
                                Login
                            </button>

                            <Link to="/register" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;