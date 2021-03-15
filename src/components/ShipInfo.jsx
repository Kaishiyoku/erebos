import CardHeadingActionButton from './Card/CardHeadingActionButton';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import CardBody from './Card/CardBody';
import clsx from 'clsx';
import Cargo from './Cargo';
import LabelWithValueGroup from './base/LabelWithValueGroup';
import formatInteger from '../core/formatInteger';
import Card from './Card/Card';
import {useState} from 'react';
import PropTypes from 'prop-types';
import ChevronUpIcon from '../icons/ChevronUpIcon';

function ShipInfo({ship, activeFlightPlan, className}) {
    const [isDetailVisible, setIsDetailVisible] = useState(false);

    return (
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
                    <Cargo cargo={ship.cargo}/>

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
    );
}

ShipInfo.propTypes = {
    activeFlightPlan: PropTypes.object,
    className: PropTypes.string,
    ship: PropTypes.object.isRequired,
};

export default ShipInfo;