import {Link, navigate} from '@reach/router';
import {useForm} from 'react-hook-form';
import login from '../core/local_storage/login';
import LoadingButton from '../components/button/LoadingButton';
import {useContext, useEffect, useState} from 'react';
import Input from '../components/button/Input';
import logout from '../core/local_storage/logout';
import ownUserInfoRequest from '../core/api/ownUserInfoRequest';
import LoggedInContext from '../LoggedInContext';
import getAccessToken from '../core/local_storage/getAccessToken';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const {register, handleSubmit, watch, errors, formState} = useForm({mode: 'onChange'});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        return () => {
            if (getAccessToken()) {
                setIsLoggedIn(true);
            }
        };
    }, []);

    const sendCheckUserRequest = ({userName, accessToken}) => {
        setIsLoading(true);

        login(userName, accessToken);

        ownUserInfoRequest()
            .then((response) => {
                navigate('/');
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
                            <Input name="userName" placeholder="User name" reference={register({required: true})}/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="accessToken" className="block text-sm font-bold mb-2">Access token</label>
                            <Input name="accessToken" type="password" placeholder="Access token" reference={register({required: true})}/>
                        </div>

                        <div className="flex justify-between space-x-2">
                            <LoadingButton type="submit" label="Login" isLoading={isLoading} disabled={!formState.isValid}/>

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