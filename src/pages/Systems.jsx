import {useContext} from 'react';
import SystemsList from '../components/SystemsList';
import UserInfoContext from '../contexts/UserInfoContext';
import SystemsContext from '../contexts/SystemsContext';
import OwnedShips from '../components/OwnedShips';
import ActiveFlightPlansContext from '../contexts/ActiveFlightPlansContext';
import Heading from '../components/base/Heading';

function Systems() {
    const [systems] = useContext(SystemsContext);
    const [userInfo] = useContext(UserInfoContext);
    const [activeFlightPlans] = useContext(ActiveFlightPlansContext);

    const ownedShips = userInfo.user.ships;

    return (
        <>
            <Heading label="Systems"/>

            <OwnedShips userInfo={userInfo} activeFlightPlans={activeFlightPlans} className="mb-8"/>

            <SystemsList systems={systems} ownedShips={ownedShips}/>
        </>
    );
}

export default Systems;