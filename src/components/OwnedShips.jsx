import PropTypes from 'prop-types';
import {Link} from '@reach/router';
import LabelWithValueGroup from './LabelWithValueGroup';
import formatNumber from '../core/formatNumber';
import Cargo from './Cargo';
import SubHeading from './SubHeading';
import Card from './Card/Card';
import CardBody from './Card/CardBody';
import CardHeadingActionButton from './Card/CardHeadingActionButton';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import {useState} from 'react';
import clsx from 'clsx';
import getFuelForShip from '../core/getFuelForShip';

function OwnedShips({ships, ...otherProps}) {
    if (!ships) {
        return null;
    }

    const [isDetailVisible, setIsDetailVisible] = useState(false);

    return (
        <div {...otherProps}>
            <SubHeading label="Owned ships"/>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
                {ships.map((ship) => (
                    <Card
                        key={ship.id}
                        headingLabel={`${ship.type} :: ${ship.location}`}
                        headingSubLabel={getFuelForShip(ship)}
                        headingActionButton={(
                            <CardHeadingActionButton
                                icon={<ChevronDownIcon/>}
                                onClick={() => setIsDetailVisible(!isDetailVisible)}
                            />
                        )}
                    >
                        <CardBody className={clsx({hidden: !isDetailVisible})}>
                            <LabelWithValueGroup
                                entries={[
                                    {label: 'Cargo', value: <Cargo cargo={ship.cargo}/>},
                                    {label: 'Maximum cargo', value: formatNumber(ship.maxCargo)},
                                    {label: 'Space available', value: formatNumber(ship.spaceAvailable)},
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
                        </CardBody>
                    </Card>
                ))}
            </div>

            <Link to="/ships/available" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline dark:text-blue-500 dark:hover:text-white">
                Show available ships
            </Link>
        </div>
    );
}

OwnedShips.propTypes = {
    ships: PropTypes.array,
};

OwnedShips.defaultProps = {
    ships: [],
};

export default OwnedShips;