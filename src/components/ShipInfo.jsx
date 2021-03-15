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

function ShipInfo({ship, activeFlightPlan}) {
    const [isDetailVisible, setIsDetailVisible] = useState(false);

    return (
        <Card
            key={ship.id}
            headingLabel={`${ship.type}`}
            headingSubLabel={`${ship.location || 'in transit'}`}
            headingActionButton={(
                <CardHeadingActionButton
                    icon={isDetailVisible ? <ChevronUpIcon/> : <ChevronDownIcon/>}
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
}

ShipInfo.propTypes = {
    activeFlightPlan: PropTypes.object.isRequired,
    ship: PropTypes.object,
};

export default ShipInfo;