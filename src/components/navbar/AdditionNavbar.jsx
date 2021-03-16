import getUserName from '../../core/local_storage/getUserName';
import formatInteger from '../../core/formatInteger';
import {useContext} from 'react';
import UserInfoContext from '../../UserInfoContext';
import logout from '../../core/local_storage/logout';
import {navigate} from '@reach/router';
import LoggedInContext from '../../LoggedInContext';

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
        <div className="flex mb-8 justify-end">
            <div className="flex space-x-2 px-4 py-2 bg-white shadow w-full xl:w-auto">
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