import {useEffect, useState} from 'react';
import ownUserInfoRequest from '../core/api/ownUserInfoRequest';
import ActiveLoans from '../components/ActiveLoans';
import OwnedShips from '../components/OwnedShips';
import UserInfo from '../components/UserInfo';
import getAccessToken from '../core/local_storage/getAccessToken';
import Login from './Login';

function Dashboard() {
    if (!getAccessToken()) {
        return <Login/>;
    }

    const [userData, setUserData] = useState({user: {credits: 0, loans: [], ships: [], username: ''}});

    useEffect(() => {
        ownUserInfoRequest().then(({data}) => setUserData(data));
    }, []);

    return (
        <>
            <div className="text-2xl pb-4">Dashboard</div>

            <UserInfo user={userData.user}/>

            <ActiveLoans loans={userData.user.loans} className="mb-8"/>

            <OwnedShips ships={userData.user.ships}/>
        </>
    );
}

export default Dashboard;