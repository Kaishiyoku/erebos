import {useState, useEffect} from 'react';
import getUserName from '../core/local_storage/getUserName';
import isLoggedIn from '../core/local_storage/isLoggedIn';
import {Link} from '@reach/router';
import authGet from '../core/request/authGet';
import {parseISO, format, parse} from 'date-fns';
import ownUserInfoRequest from '../core/api/ownUserInfoRequest';

function Dashboard() {
    if (!isLoggedIn()) {
        return <div>Please <Link to="/login" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">login</Link> first!</div>;
    }

    const [userData, setUserData] = useState({user: {loans: [], ships: []}});

    useEffect(() => {
        ownUserInfoRequest().then(({data}) => setUserData(data));
    }, []);

    const renderLoans = userData.user.loans.map((loan) => (
        <div key={loan.id}>
            <div className="flex">
                <div className="w-40">Due:</div>
                <div>{format(parseISO(loan.due), 'dd.MM.yyyy HH:mm')}</div>
            </div>
            <div className="flex">
                <div className="w-40">Repayment amount:</div>
                <div>{loan.repaymentAmount}</div>
            </div>
            <div className="flex">
                <div className="w-40">Status:</div>
                <div>{loan.status}</div>
            </div>
            <div className="flex">
                <div className="w-40">Type:</div>
                <div>{loan.type}</div>
            </div>
        </div>
    ));

    const renderShips = userData.user.ships.map((ship) => (
        <div key={ship.id}>
            <div>Cargo: {ship.cargo}</div>
            <div>Class: {ship.class}</div>
            <div>Location: {ship.location}</div>
            <div>Manufacturer: {ship.manufacturer}</div>
            <div>maxCargo: {ship.maxCargo}</div>
            <div>Plating: {ship.plating}</div>
            <div>spaceAvailable: {ship.spaceAvailable}</div>
            <div>Speed: {ship.speed}</div>
            <div>Type: {ship.type}</div>
            <div>Weapons: {ship.weapons}</div>
        </div>
    ));

    return (
        <>
            <div className="text-2xl pb-4">Dashboard</div>

            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white">
                <div className="px-6 py-4">
                    <div className="flex">
                        <div className="w-32">User name:</div>
                        <div>{userData.user.username}</div>
                    </div>
                    <div className="flex">
                        <div className="w-32">Credits:</div>
                        <div>{userData.user.credits}</div>
                    </div>
                    <div className="flex">
                        <div className="w-32">Loans:</div>
                        <div className="pr-4">{renderLoans}</div>
                        <div>
                            <Link to="/loans/available" className="text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">
                                Show available loans
                            </Link>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-32">Ships:</div>
                        <div className="pr-4">{renderShips}</div>
                        <div>
                            <Link to="/ships/available" className="text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">
                                Show available ships
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;