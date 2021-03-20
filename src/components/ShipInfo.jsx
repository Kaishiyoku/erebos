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
import SystemsContext from '../contexts/SystemsContext';
import formatDecimal from '../core/formatDecimal';
import submitFlightPlanRequest from '../core/api_requests/flight_plans/submitFlightPlanRequest';
import ModalDialog from './base/ModalDialog';
import calculateDistance from '../core/calculateDistance';
import {toast} from 'react-toastify';
import estimateRouteFuelCost from '../core/estimateRouteFuelCost';

function ShipInfo({ship, activeFlightPlan, className}) {
    const [systems] = useContext(SystemsContext);
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [isRouteSelectionModalOpen, setIsRouteSelectionModalOpen] = useState(false);

    const allLocations = systems.reduce((accum, {locations}) => {
        return accum.concat(locations);
    }, []);
    const currentShipLocation = allLocations.find((location) => ship.location === location.symbol);

    // const currentShipLocation = systems.

    const handleRouteClick = () => {
        setIsRouteSelectionModalOpen(true);
    };

    const handleCreateFlightRoute = (location) => {
        submitFlightPlanRequest(location.symbol, ship.id).then(() => {
            toast.success('Flight planned.');

            setIsRouteSelectionModalOpen(false);
        });
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

                            <Button label="Route" size="sm" onClick={handleRouteClick}/>
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
                <div className="flex space-x-2 items-end pb-2">
                    <div className="text-xl font-bold">{ship.type}</div>
                    <div className="text-gray-500">{ship.location}</div>
                </div>

                <Cargo cargo={ship.cargo} className="pb-4"/>

                <div>
                    {systems.map((system) => (
                        <div key={system.symbol}>
                            <div className="text-lg font-bold px-2 pt-6 pb-2">{system.symbol} :: {system.name}</div>
                            <div>
                                {system.locations.map((location) => (
                                    <div key={location.symbol} className="flex items-center odd:bg-gray-50 px-2 py-1 dark:odd:bg-gray-900 dark:odd:bg-opacity-25">
                                        <div className="flex-grow">
                                            <div>{location.symbol}</div>
                                            <div className="flex text-sm text-gray-500">
                                                <div className="w-32">({location.x}, {location.y})</div>
                                                <div className="w-32">{ship.location === location.symbol ? 'Current location' : formatDecimal(calculateDistance(ship, location))}</div>
                                                <div>~{estimateRouteFuelCost(currentShipLocation, location)} fuel</div>
                                            </div>
                                        </div>
                                        {ship.location !== location.symbol && <Button label="Route" size="sm" onClick={() => handleCreateFlightRoute(location)}/>}
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