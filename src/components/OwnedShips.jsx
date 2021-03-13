import PropTypes from 'prop-types';
import {Link} from '@reach/router';
import LabelWithValueGroup from './LabelWithValueGroup';
import {length} from 'ramda';
import formatNumber from '../core/formatNumber';
import Cargo from './Cargo';

function OwnedShips(props) {
    const getShipDisplayValuesFor = (ship) => [
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
    ];

    const renderShips = length(props.ships) > 0 ? props.ships.map((ship) => (
        <div key={ship.id} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="font-bold text-xl px-6 py-4">{ship.type} :: {ship.location}</div>
            <div className="px-6 pb-4">
                <LabelWithValueGroup entries={getShipDisplayValuesFor(ship)}/>
            </div>
        </div>
    )) : <div className="text-gray-500 italic">You don't have any ships in your possession yet.</div>;

    return (
        <div className={props.className}>
            <div className="text-xl pb-4">Owned Ships</div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
                {renderShips}
            </div>

            <Link to="/ships/available" className="text-left text-blue-600 shadow-md border border-blue-300 bg-white rounded-full transition-all duration-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none px-4 py-2 dark:text-blue-400 dark:border-blue-500 dark:bg-black dark:bg-opacity-50 dark:hover:text-white dark:hover:border-blue-400 dark:hover:bg-blue-500">
                Show available ships
            </Link>
        </div>
    );
}

OwnedShips.propTypes = {
    ships: PropTypes.arrayOf(PropTypes.shape({
        cargo: PropTypes.array.isRequired,
        class: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        location: PropTypes.string,
        manufacturer: PropTypes.string.isRequired,
        maxCargo: PropTypes.number.isRequired,
        plating: PropTypes.number.isRequired,
        spaceAvailable: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        weapons: PropTypes.number.isRequired,
    })).isRequired,
};

export default OwnedShips;