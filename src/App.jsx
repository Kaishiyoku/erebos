import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import {Router} from '@reach/router';
import Navbar from './components/navbar/Navbar';
import AvailableLoans from './pages/AvailableLoans';
import ShipMarket from './pages/ShipMarket';
import {ToastContainer} from 'react-toastify';
import LoggedInContext from './LoggedInContext';
import {useEffect, useState} from 'react';
import getAccessToken from './core/local_storage/getAccessToken';
import {DARK_MODE, USER_INFO_REQUEST_INTERVAL} from './core/constants';
import Systems from './pages/Systems';
import Modal from 'react-modal';
import Marketplace from './pages/Marketplace';
import preval from 'preval.macro';
import UserInfoContext from './UserInfoContext';
import {timer} from 'rxjs';
import ownUserInfoRequest from './core/api_requests/miscellaneous/ownUserInfoRequest';
import ActiveFlightPlansContext from './ActiveFlightPlansContext';
import sequential from 'promise-sequential';
import ownedShipsRequest from './core/api_requests/ships/ownedShipsRequest';
import Bottleneck from 'bottleneck';
import activeFlightPlanInfoRequest from './core/api_requests/flight_plans/activeFlightPlanInfoRequest';

Modal.setAppElement('#root');

if (!window.rateLimiter) {
    // eslint-disable-next-line fp/no-mutation
    window.rateLimiter = new Bottleneck({maxConcurrent: 2, minTime: 500});
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!getAccessToken());
    const [userInfo, setUserInfo] = useState({user: {ships: []}});
    const [activeFlightPlans, setActiveFlightPlans] = useState([]);
    const [isGlobalDataLoading, setIsGlobalDataLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem(DARK_MODE) || 'os');

    useEffect(() => {
        if (!isLoggedIn) {
            return;
        }

        const userInfoRequestTimer = timer(0, USER_INFO_REQUEST_INTERVAL).subscribe((value) => {
            setIsGlobalDataLoading(true);

            sequential([
                ownUserInfoRequest,
                ownedShipsRequest,
            ]).then(([{data: userInfoData}, {data: ownedShipsData}]) => {
                setUserInfo(userInfoData);

                const activeFlightPlanRequests = ownedShipsData.ships.filter(({flightPlanId}) => !!flightPlanId).map(({flightPlanId}) => () => activeFlightPlanInfoRequest(flightPlanId));

                setActiveFlightPlans([]);

                sequential(activeFlightPlanRequests).then((activeFlightPlanResponses) => {
                    setActiveFlightPlans(activeFlightPlanResponses.map((activeFlightPlanResponse) => activeFlightPlanResponse.data.flightPlan));
                });

                setIsGlobalDataLoading(false);
            });
        });

        if (!isLoggedIn) {
            userInfoRequestTimer.unsubscribe();
        }
    }, [isLoggedIn]);

    const toggleDarkMode = () => {
        const nextDarkModes = {
            dark: 'light',
            light: 'os',
            os: 'dark',
        };

        const nextDarkMode = nextDarkModes[darkMode];

        if (nextDarkMode === 'light') {
            document.querySelector('html').classList.remove('dark');
        } else if (nextDarkMode === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('html').classList.add('dark');
        }

        localStorage.setItem(DARK_MODE, nextDarkMode);
        setDarkMode(nextDarkMode);
    };

    return (
        <LoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
                <ActiveFlightPlansContext.Provider value={[activeFlightPlans, setActiveFlightPlans]}>
                    <div className="container px-4 lg:px-20 mx-auto mb-12">
                        <Navbar
                            label="Erebos"
                            darkMode={darkMode}
                            toggleDarkModeFn={toggleDarkMode}
                            isGlobalDataLoading={isGlobalDataLoading}
                        />

                        <Router>
                            <Dashboard path="/"/>
                            <AvailableLoans path="/loans/available"/>
                            <ShipMarket path="/ships/market"/>
                            <Systems path="/systems"/>
                            <Marketplace path="/marketplaces/:systemSymbol"/>
                            <Login path="/login"/>
                            <Register path="/register"/>
                        </Router>

                        <ToastContainer/>

                        <div className="text-xs text-gray-400 dark:text-gray-600 mt-12 text-right">
                            Build date: {preval`module.exports = new Date().toUTCString();`}
                        </div>
                    </div>
                </ActiveFlightPlansContext.Provider>
            </UserInfoContext.Provider>
        </LoggedInContext.Provider>
    );
}

export default App;
