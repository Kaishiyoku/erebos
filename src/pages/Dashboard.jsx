import {useState, useEffect} from 'react';
import getUserName from '../core/local_storage/getUserName';
import isLoggedIn from '../core/local_storage/isLoggedIn';
import {Link} from '@reach/router';
import authGet from '../core/request/authGet';
import {parseISO, format, parse} from 'date-fns';
import ownUserInfoRequest from '../core/api/ownUserInfoRequest';
import ActiveLoans from '../components/ActiveLoans';
import OwnedShips from '../components/OwnedShips';

function Dashboard() {
    if (!isLoggedIn()) {
        return <div>Please <Link to="/login" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">login</Link> first!</div>;
    }

    const [userData, setUserData] = useState({user: {loans: [], ships: []}});

    useEffect(() => {
        ownUserInfoRequest().then(({data}) => setUserData(data));
    }, []);

    return (
        <>
            <div className="text-2xl pb-4">Dashboard</div>

            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white mb-8">
                <div className="px-6 py-4">
                    <div className="flex">
                        <div className="w-32">User name:</div>
                        <div>{userData.user.username}</div>
                    </div>
                    <div className="flex">
                        <div className="w-32">Credits:</div>
                        <div>{userData.user.credits}</div>
                    </div>
                </div>
            </div>

            <ActiveLoans loans={userData.user.loans} className="mb-8"/>

            <OwnedShips ships={userData.user.ships}/>
        </>
    );
}

export default Dashboard;