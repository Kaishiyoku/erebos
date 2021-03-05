import {Link, useNavigate} from '@reach/router';
import {useForm} from 'react-hook-form';
import login from '../core/local_storage/login';
import LoadingButton from '../components/button/LoadingButton';
import {useState} from 'react';
import Input from '../components/button/Input';
import logout from '../core/local_storage/logout';
import authGet from '../core/request/authGet';

function Login() {
    const navigate = useNavigate();
    const {register, handleSubmit, watch, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const sendCheckUserRequest = ({userName, accessToken}) => {
        setIsLoading(true);

        login(userName, accessToken);

        authGet(`/users/${userName}`)
            .then((response) => {
                navigate('/dashboard');
            })
            .catch((error) => {
                logout();

                // TODO: handle error
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="mx-auto w-full max-w-sm bg-white shadow-md rounded text-left">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white">
                <div className="font-bold text-xl px-6 py-4">Login</div>

                <div className="px-6 pb-4">
                    <form onSubmit={handleSubmit(sendCheckUserRequest)}>
                        <div className="mb-4">
                            <label htmlFor="userName" className="block text-sm font-bold mb-2">User name</label>
                            <Input name="userName" placeholder="User name" reference={register}/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="accessToken" className="block text-sm font-bold mb-2">Access token</label>
                            <Input name="accessToken" type="password" placeholder="Access token" reference={register}/>
                        </div>

                        <div className="flex justify-between space-x-2">
                            <LoadingButton type="submit" label="Login" isLoading={isLoading}/>

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