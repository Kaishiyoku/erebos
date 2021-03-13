import {useEffect, useState} from 'react';
import ownUserInfoRequest from '../core/api/ownUserInfoRequest';
import OwnedShips from '../components/OwnedShips';
import UserInfo from '../components/UserInfo';
import getAccessToken from '../core/local_storage/getAccessToken';
import Login from './Login';
import PageHeading from '../components/PageHeading';

function Dashboard() {
    if (!getAccessToken()) {
        return <Login/>;
    }

    const [userData, setUserData] = useState();

    useEffect(() => {
        ownUserInfoRequest().then(({data}) => setUserData(data));
    }, []);

    return (
        <>
            <PageHeading label="Dashboard"/>

            <UserInfo userData={userData}/>

            {userData && <OwnedShips ships={userData.user.ships}/>}
        </>
    );
}

export default Dashboard;