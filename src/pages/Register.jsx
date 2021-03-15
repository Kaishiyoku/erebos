import {Link} from '@reach/router';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import Input from '../components/input/Input';
import LoadingButton from '../components/base/button/LoadingButton';
import registerRequest from '../core/api_requests/miscellaneous/registerRequest';

function Register() {
    const {register, handleSubmit, watch, errors} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    const sendRegisterRequest = ({userName}) => {
        setIsLoading(true);

        registerRequest(userName)
            .then(({data}) => {
                setUserData(data);
            })
            .catch((error) => {
                // TODO: handle error
            })
            .finally(() => setIsLoading(false));
    };

    const userDataInfo = userData ? (
        <div className="pb-4">
            <div className="mb-4 px-3 py-1 bg-green-100 border-l-4 border-green-300 rounded">
                Registration complete. You can now login using your user name and token. Don't forget your login data.
            </div>

            <div className="mb-4">
                <div>User name:</div>
                <div className="font-mono text-black font-bold">{userData.user.username}</div>
            </div>

            <div>
                <div>Token:</div>
                <div className="font-mono text-black font-bold">{userData.token}</div>
            </div>
        </div>
    ) : null;

    return (
        <div className="mx-auto w-full max-w-sm bg-white shadow-md rounded text-left">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white">
                <div className="font-bold text-xl px-6 py-4">Register</div>

                <div className="px-6 pb-4">
                    <form onSubmit={handleSubmit(sendRegisterRequest)}>
                        <div className="mb-4">
                            <label htmlFor="userName" className="block text-sm font-bold mb-2">User name</label>
                            <Input name="userName" placeholder="User name" disabled={!!userData} reference={register}/>
                        </div>

                        {userDataInfo}

                        <div className="flex justify-between space-x-2">
                            <LoadingButton type="submit" label="Register" isLoading={isLoading} disabled={!!userData}/>

                            <Link to="/login" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;