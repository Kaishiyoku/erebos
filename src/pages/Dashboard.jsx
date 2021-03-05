import {useState, useEffect} from 'react';
import getUserName from '../core/local_storage/getUserName';
import isLoggedIn from '../core/local_storage/isLoggedIn';
import {Link} from '@reach/router';
import authGet from '../core/request/authGet';

function Dashboard() {
    if (!isLoggedIn()) {
        return <div>Please <Link to="/login" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">login</Link> first!</div>;
    }

    const [userData, setUserData] = useState({user: {loans: [], ships: []}});

    useEffect(() => {
        authGet(`/users/${getUserName()}`).then(({data}) => {
            setUserData(data);
        });
    }, []);

    const renderLoans = userData.user.loans.map((loan) => (
        <div key={loan.id}>
            <div>due: {loan.due}</div>
            <div>id: {loan.id}</div>
            <div>repaymentAmount: {loan.repaymentAmount}</div>
            <div>status: {loan.status}</div>
            <div>type: {loan.type}</div>
        </div>
    ));

    const renderShips = userData.user.ships.map((ship) => (
        <div key={ship.id}>
            [TODO]
        </div>
    ));

    return (
        <>
            <div>Dashboard</div>
            <div>User name: {userData.user.username}</div>
            <div>Credits: {userData.user.credits}</div>
            <div>Loans: {renderLoans}</div>
            <div>Ships: {renderShips}</div>
        </>
    );
}

export default Dashboard;