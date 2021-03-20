import PropTypes from 'prop-types';
import {Link} from '@reach/router';
import SubHeading from './base/SubHeading';
import {length} from 'ramda';
import getFlightPlanFromListByShipId from '../core/flight/getFlightPlanFromListByShipId';
import ShipInfo from './ShipInfo';

function OwnedShips({userInfo, activeFlightPlans, showShipMarketLink, className}) {
    if (!userInfo) {
        return null;
    }

    const {user} = userInfo;
    const {ships} = user;

    if (length(ships) === 0) {
        return null;
    }

    return (
        <div className={className}>
            <SubHeading label="Owned ships"/>

            <div className="lg:flex lg:items-start lg:gap-4 mb-8">
                {ships.map((ship) => <ShipInfo key={ship.id} ship={ship} activeFlightPlan={getFlightPlanFromListByShipId(ship.id, activeFlightPlans)} className="lg:w-1/2 mb-4 lg:mb-0"/>)}
            </div>

            {showShipMarketLink && (
                <Link to="/ships/market" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline dark:text-blue-500 dark:hover:text-white">
                    Ship market
                </Link>
            )}
        </div>
    );
}

OwnedShips.propTypes = {
    activeFlightPlans: PropTypes.array,
    className: PropTypes.string,
    showShipMarketLink: PropTypes.bool,
    userInfo: PropTypes.object,
};

OwnedShips.defaultProps = {
    showShipMarketLink: false,
};

export default OwnedShips;