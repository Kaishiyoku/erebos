import CardHeadingActionButton from './Card/CardHeadingActionButton';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import CardBody from './Card/CardBody';
import clsx from 'clsx';
import Cargo from './Cargo';
import LabelWithValueGroup from './base/LabelWithValueGroup';
import formatInteger from '../core/formatInteger';
import Card from './Card/Card';
import {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import ChevronUpIcon from '../icons/ChevronUpIcon';
import Button from './base/button/Button';
import SystemsContext from '../SystemsContext';
import formatDecimal from '../core/formatDecimal';
import submitFlightPlanRequest from '../core/api_requests/flight_plans/submitFlightPlanRequest';
import ModalDialog from './base/ModalDialog';
import calculateDistance from '../core/calculateDistance';

function ShipInfo({ship, activeFlightPlan, className}) {
    const [systems] = useContext(SystemsContext);
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [isRouteSelectionModalOpen, setIsRouteSelectionModalOpen] = useState(false);

    const handleRouteClick = () => {
        setIsRouteSelectionModalOpen(true);
    };

    return (
        <>
            <Card
                headingLabel={`${ship.type}`}
                headingSubLabel={`${ship.location || 'in transit'}`}
                headingActionButton={(
                    <CardHeadingActionButton
                        icon={isDetailVisible ? <ChevronUpIcon/> : <ChevronDownIcon/>}
                        onClick={() => setIsDetailVisible(!isDetailVisible)}
                    />
                )}
                className={className}
            >
                <CardBody>
                    <>
                        <div className="flex items-center">
                            <div className="flex-grow">
                                <Cargo cargo={ship.cargo}/>
                            </div>

                            <Button label="Route" size="sm" onClick={() => handleRouteClick(ship)}/>
                        </div>

                        {activeFlightPlan && <div className="mt-2">{activeFlightPlan.departure} -> {activeFlightPlan.destination} ({activeFlightPlan.timeRemainingInSeconds}s)</div>}

                        <div className={clsx('mt-4', {hidden: !isDetailVisible})}>
                            <LabelWithValueGroup
                                entries={[
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

            <ModalDialog
                isOpen={isRouteSelectionModalOpen}
                onRequestClose={() => setIsRouteSelectionModalOpen(false)}
                contentLabel="Select route"
            >
                <div>Current location: {ship.location} ({ship.x}, {ship.y})</div>
                <div>Target location:</div>
                <div>
                    {systems.map((system) => (
                        <div key={system.symbol}>
                            <div className="text-lg">{system.symbol} :: {system.name}</div>
                            <div>
                                {system.locations.map((location) => (
                                    <div key={location.symbol} className="flex">
                                        <div>{location.symbol} ({location.x}, {location.y}) - {formatDecimal(calculateDistance(ship, location))}</div>
                                        <Button label="Route" size="sm" onClick={() => submitFlightPlanRequest(location.symbol, ship.id)}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ModalDialog>
        </>
    );
}

ShipInfo.propTypes = {
    activeFlightPlan: PropTypes.object,
    className: PropTypes.string,
    ship: PropTypes.object.isRequired,
};

export default ShipInfo;