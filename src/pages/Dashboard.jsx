import {useEffect, useState} from 'react';
import isLoggedIn from '../core/local_storage/isLoggedIn';
import {Link} from '@reach/router';
import ownUserInfoRequest from '../core/api/ownUserInfoRequest';
import ActiveLoans from '../components/ActiveLoans';
import OwnedShips from '../components/OwnedShips';
import UserInfo from '../components/UserInfo';

function Dashboard() {
    if (!isLoggedIn()) {
        return <div>Please <Link to="/login" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">login</Link> first!</div>;
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