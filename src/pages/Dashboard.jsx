import {useContext} from 'react';
import OwnedShips from '../components/OwnedShips';
import UserInfo from '../components/UserInfo';
import getAccessToken from '../core/local_storage/getAccessToken';
import Login from './Login';
import Heading from '../components/base/Heading';
import UserInfoContext from '../UserInfoContext';

function Dashboard() {
    if (!getAccessToken()) {
        return <Login/>;
    }

    const [userInfo, setUserInfo] = useContext(UserInfoContext);

    return (
        <>
            <Heading label="Dashboard"/>

            <UserInfo userInfo={userInfo}/>

            {userInfo && <OwnedShips ships={userInfo.user.ships}/>}
        </>
    );
}

export default Dashboard;