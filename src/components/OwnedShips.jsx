import PropTypes from 'prop-types';
import {Link} from '@reach/router';
import LabelWithValueGroup from './LabelWithValueGroup';
import {length} from 'ramda';

function OwnedShips(props) {
    const getShipDisplayValuesFor = (ship) => [
        {label: 'Class', value: ship.class},
        {label: 'Type', value: ship.type},
        {label: 'Location', value: ship.location},
        {label: 'Cargo', value: ship.cargo},
        {label: 'Space available', value: ship.spaceAvailable},
        {label: 'Manufacturer', value: ship.manufacturer},
        {label: 'Maximum cargo', value: ship.maxCargo},
        {label: 'Plating', value: ship.plating},
        {label: 'Speed', value: ship.speed},
        {label: 'Weapons', value: ship.weapons},
    ];

    const renderShips = length(props.ships) > 0 ? props.ships.map((ship) => (
        <div key={ship.id} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white">
            <div className="font-bold text-xl px-6 py-4">{ship.type} :: {ship.location}</div>
            <div className="px-6 pb-4">
                <LabelWithValueGroup entries={getShipDisplayValuesFor(ship)}/>
            </div>
        </div>
    )) : <div className="text-gray-500 italic">You don't have any ships in your possession yet.</div>;

    return (
        <div className={props.className}>
            <div className="text-xl pb-4">Owned Ships</div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
                {renderShips}
            </div>

            <Link to="/ships/available" className="text-left text-blue-600 shadow-md border border-blue-300 bg-white rounded-full transition-all duration-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none px-4 py-2">
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
        location: PropTypes.string.isRequired,
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