import getUserName from '../../core/local_storage/getUserName';
import formatInteger from '../../core/formatInteger';
import {useContext} from 'react';
import UserInfoContext from '../../contexts/UserInfoContext';
import logout from '../../core/local_storage/logout';
import {navigate} from '@reach/router';
import LoggedInContext from '../../contexts/LoggedInContext';

function AdditionNavbar() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const [userInfo] = useContext(UserInfoContext);

    if (!isLoggedIn) {
        return null;
    }

    const handleLogout = () => {
        logout();

        navigate('/', {replace: true}).then(() => {
            setIsLoggedIn(false);
        });
    };

    return (
        <div className="flex mb-8 justify-end text-sm">
            <div className="flex space-x-2 px-4 py-2 bg-white shadow w-full xl:w-auto dark:bg-gray-800">
                <div>Logged in as {getUserName()}</div>
                <div>—</div>
                <div>{formatInteger(userInfo.user.credits)} credits</div>
                <div>—</div>
                <div>
                    <a onClick={handleLogout} className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline dark:text-blue-500 dark:hover:text-white">
                        logout
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AdditionNavbar;