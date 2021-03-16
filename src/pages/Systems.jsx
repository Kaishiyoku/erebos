import {useContext} from 'react';
import SystemsList from '../components/SystemsList';
import UserInfoContext from '../UserInfoContext';
import SystemsContext from '../SystemsContext';
import OwnedShips from '../components/OwnedShips';
import ActiveFlightPlansContext from '../ActiveFlightPlansContext';

function Systems() {
    const [systems] = useContext(SystemsContext);
    const [userInfo] = useContext(UserInfoContext);
    const [activeFlightPlans] = useContext(ActiveFlightPlansContext);

    const ownedShips = userInfo.user.ships;

    return (
        <>
            <div className="text-2xl pb-4">Systems</div>

            <OwnedShips userInfo={userInfo} activeFlightPlans={activeFlightPlans} className="mb-8"/>

            <SystemsList systems={systems} ownedShips={ownedShips}/>
        </>
    );
}

export default Systems;