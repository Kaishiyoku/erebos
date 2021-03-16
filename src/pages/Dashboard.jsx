import {useContext} from 'react';
import OwnedShips from '../components/OwnedShips';
import UserInfo from '../components/UserInfo';
import getAccessToken from '../core/local_storage/getAccessToken';
import Login from './Login';
import Heading from '../components/base/Heading';
import UserInfoContext from '../UserInfoContext';
import ActiveFlightPlansContext from '../ActiveFlightPlansContext';

function Dashboard() {
    if (!getAccessToken()) {
        return <Login/>;
    }

    const [userInfo] = useContext(UserInfoContext);
    const [activeFlightPlans] = useContext(ActiveFlightPlansContext);

    return (
        <>
            <Heading label="Dashboard"/>

            <UserInfo userInfo={userInfo}/>

            <OwnedShips userInfo={userInfo} activeFlightPlans={activeFlightPlans}/>
        </>
    );
}

export default Dashboard;