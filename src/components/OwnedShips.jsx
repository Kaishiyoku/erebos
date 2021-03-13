import PropTypes from 'prop-types';
import {Link} from '@reach/router';
import LabelWithValueGroup from './LabelWithValueGroup';
import {length} from 'ramda';
import formatNumber from '../core/formatNumber';
import Cargo from './Cargo';
import PageSubHeading from './PageSubHeading';

function OwnedShips({ships, ...otherProps}) {
    if (!ships) {
        return null;
    }

    const renderShips = length(ships) > 0 ? ships.map((ship) => (
        <div key={ship.id} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="font-bold text-xl px-6 py-4">{ship.type} :: {ship.location}</div>
            <div className="px-6 pb-4">
                <LabelWithValueGroup
                    entries={[
                        {label: 'Class', value: ship.class},
                        {label: 'Type', value: ship.type},
                        {label: 'Location', value: ship.location || '/'},
                        {label: 'Cargo', value: <Cargo cargo={ship.cargo}/>},
                        {label: 'Space available', value: formatNumber(ship.spaceAvailable)},
                        {label: 'Manufacturer', value: ship.manufacturer},
                        {label: 'Maximum cargo', value: formatNumber(ship.maxCargo)},
                        {label: 'Plating', value: ship.plating},
                        {label: 'Speed', value: ship.speed},
                        {label: 'Weapons', value: ship.weapons},
                    ]}
                />
            </div>
        </div>
    )) : <div className="text-gray-500 italic">You don't have any ships in your possession yet.</div>;

    return (
        <div {...otherProps}>
            <PageSubHeading label="Owned ships"/>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
                {renderShips}
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