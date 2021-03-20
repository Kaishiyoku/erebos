import PropTypes from 'prop-types';
import UserInfoContext from './contexts/UserInfoContext';
import SystemsContext from './contexts/SystemsContext';
import ActiveFlightPlansContext from './contexts/ActiveFlightPlansContext';
import MarketplacesContext from './contexts/MarketplacesContext';
import LoggedInContext from './contexts/LoggedInContext';
import {useEffect, useState} from 'react';
import {timer} from 'rxjs';
import {BASE_DATA_REQUEST_INTERVAL, MARKETPLACE_CACHE} from './core/constants';
import sequential from 'promise-sequential';
import ownUserInfoRequest from './core/api_requests/miscellaneous/ownUserInfoRequest';
import ownedShipsRequest from './core/api_requests/ships/ownedShipsRequest';
import systemsInfoRequest from './core/api_requests/locations/systemsInfoRequest';
import getLocationsWithDockedShips from './core/location/getLocationsWithDockedShips';
import locationMarketplaceRequest from './core/api_requests/locations/locationMarketplaceRequest';
import activeFlightPlanInfoRequest from './core/api_requests/flight_plans/activeFlightPlanInfoRequest';
import getAccessToken from './core/local_storage/getAccessToken';
import getLocalStorageItemAsJson from './core/local_storage/getLocalStorageItemAsJson';
import setLocalStorageItemAsJson from './core/local_storage/setLocalStorageItemAsJson';
import IsGlobalDataLoadingContext from './contexts/IsGlobalDataLoadingContext';

function ContextContainer({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(!!getAccessToken());
    const [isGlobalDataLoading, setIsGlobalDataLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({user: {ships: []}});
    const [activeFlightPlans, setActiveFlightPlans] = useState([]);
    const [systems, setSystems] = useState([]);
    const [marketplaces, setMarketplaces] = useState([]);

    const setAndCacheMarketplaces = (marketplaceData) => {
        const adjustedMarketplaceData = marketplaceData.map((item) => ({goods: item.location.marketplace, locationSymbol: item.location.symbol, updatedAt: new Date()}));

        const cachedMarketplaceData = getLocalStorageItemAsJson(MARKETPLACE_CACHE) || [];
        const filteredCachedMarketplaceData = cachedMarketplaceData.filter((cachedMarketplace) => !adjustedMarketplaceData.map(({locationSymbol}) => locationSymbol).includes(cachedMarketplace.locationSymbol));

        const mergedMarketplaceData = filteredCachedMarketplaceData.concat(adjustedMarketplaceData);

        setLocalStorageItemAsJson(MARKETPLACE_CACHE, mergedMarketplaceData);

        setMarketplaces(mergedMarketplaceData);
    };

    useEffect(() => {
        if (!isLoggedIn) {
            return;
        }

        const userInfoRequestTimer = timer(0, BASE_DATA_REQUEST_INTERVAL).subscribe(() => {
            setIsGlobalDataLoading(true);

            sequential([
                ownUserInfoRequest,
                ownedShipsRequest,
                systemsInfoRequest,
            ]).then(([{data: userInfoData}, {data: ownedShipsData}, {data: systemsInfoData}]) => {
                const locationsWithDockedShips = getLocationsWithDockedShips(systemsInfoData.systems, userInfoData.user.ships);

                setSystems(systemsInfoData.systems);
                setUserInfo(userInfoData);

                const marketplaceRequests = locationsWithDockedShips.map(({symbol}) => () => locationMarketplaceRequest(symbol));

                sequential(marketplaceRequests).then((marketplaceResponses) => {
                    const marketplacesData = marketplaceResponses.map(({data}) => data);

                    setAndCacheMarketplaces(marketplacesData);

                    const activeFlightPlanRequests = ownedShipsData.ships.filter(({flightPlanId}) => !!flightPlanId).map(({flightPlanId}) => () => activeFlightPlanInfoRequest(flightPlanId));

                    sequential(activeFlightPlanRequests).then((activeFlightPlanResponses) => {
                        setActiveFlightPlans(activeFlightPlanResponses.map((activeFlightPlanResponse) => activeFlightPlanResponse.data.flightPlan));
                    });

                    setIsGlobalDataLoading(false);
                });
            });
        });

        if (!isLoggedIn) {
            userInfoRequestTimer.unsubscribe();
        }
    }, [isLoggedIn]);

    return (
        <LoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            <IsGlobalDataLoadingContext.Provider value={[isGlobalDataLoading, setIsGlobalDataLoading]}>
                <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
                    <SystemsContext.Provider value={[systems, setSystems]}>
                        <ActiveFlightPlansContext.Provider value={[activeFlightPlans, setActiveFlightPlans]}>
                            <MarketplacesContext.Provider value={[marketplaces, setAndCacheMarketplaces]}>
                                {children}
                            </MarketplacesContext.Provider>
                        </ActiveFlightPlansContext.Provider>
                    </SystemsContext.Provider>
                </UserInfoContext.Provider>
            </IsGlobalDataLoadingContext.Provider>
        </LoggedInContext.Provider>
    );
}

ContextContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContextContainer;