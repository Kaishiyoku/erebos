import PropTypes from 'prop-types';
import {Link} from '@reach/router';
import LabelWithValueGroup from './base/LabelWithValueGroup';
import Cargo from './Cargo';
import SubHeading from './base/SubHeading';
import Card from './Card/Card';
import CardBody from './Card/CardBody';
import CardHeadingActionButton from './Card/CardHeadingActionButton';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import {useState} from 'react';
import clsx from 'clsx';
import formatInteger from '../core/formatInteger';
import {length} from 'ramda';
import getFlightPlanFromListByShipId from '../core/getFlightPlanFromListByShipId';

function OwnedShips({userInfo, activeFlightPlans}) {
    if (!userInfo) {
        return null;
    }

    const {user} = userInfo;
    const {ships} = user;

    if (length(ships) === 0) {
        return null;
    }

    const [isDetailVisible, setIsDetailVisible] = useState(false);

    return (
        <div>
            <SubHeading label="Owned ships"/>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
                {ships.map((ship) => {
                    const activeFlightPlan = getFlightPlanFromListByShipId(ship.id, activeFlightPlans);

                    return (
                        <Card
                            key={ship.id}
                            headingLabel={`${ship.type}`}
                            headingSubLabel={`${ship.location || 'in transit'}`}
                            headingActionButton={(
                                <CardHeadingActionButton
                                    icon={<ChevronDownIcon/>}
                                    onClick={() => setIsDetailVisible(!isDetailVisible)}
                                />
                            )}
                        >
                            <CardBody>
                                <>
                                    <div className={clsx('flex space-x-2', {hidden: isDetailVisible})}>
                                        {activeFlightPlan && <div>{activeFlightPlan.departure} -> {activeFlightPlan.destination} ({activeFlightPlan.timeRemainingInSeconds}s)</div>}

                                        <Cargo cargo={ship.cargo}/>
                                    </div>

                                    <div className={clsx({hidden: !isDetailVisible})}>
                                        <LabelWithValueGroup
                                            entries={[
                                                {label: 'Cargo', value: <Cargo cargo={ship.cargo}/>},
                                                {label: 'Maximum cargo', value: formatInteger(ship.maxCargo)},
                                                {label: 'Space available', value: formatInteger(ship.spaceAvailable)},
                                            ]}
                                            className="mb-8"
                                        />

                                        <LabelWithValueGroup
                                            entries={[
                                                {label: 'Class', value: ship.class},
                                                {label: 'Type', value: ship.type},
                                                {label: 'Location', value: ship.location || '/'},
                                                {label: 'Manufacturer', value: ship.manufacturer},
                                                {label: 'Plating', value: ship.plating},
                                                {label: 'Speed', value: ship.speed},
                                                {label: 'Weapons', value: ship.weapons},
                                            ]}
                                        />
                                    </div>
                                </>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>

            <Link to="/ships/market" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline dark:text-blue-500 dark:hover:text-white">
                Ship market
            </Link>
        </div>
    );
}

OwnedShips.propTypes = {
    activeFlightPlans: PropTypes.array,
    userInfo: PropTypes.object,
};

export default OwnedShips;