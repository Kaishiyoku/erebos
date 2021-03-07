import PropTypes from 'prop-types';
import {Link} from '@reach/router';

function OwnedShips(props) {
    const renderShips = props.ships.map((ship) => (
        <div key={ship.id}>
            <div className="mb-4">
                <div className="flex">
                    <div className="w-40">Class:</div>
                    <div>{ship.class}</div>
                </div>
                <div className="flex">
                    <div className="w-40">Type:</div>
                    <div>{ship.type}</div>
                </div>
                <div className="flex">
                    <div className="w-40">Location:</div>
                    <div>{ship.location}</div>
                </div>
                <div className="flex">
                    <div className="w-40">Cargo:</div>
                    <div>{ship.cargo}</div>
                </div>
                <div className="flex">
                    <div className="w-40">Space available:</div>
                    <div>{ship.spaceAvailable}</div>
                </div>

                <div className="flex">
                    <div className="w-40">Manufacturer:</div>
                    <div>{ship.manufacturer}</div>
                </div>
                <div className="flex">
                    <div className="w-40">Maximum cargo:</div>
                    <div>{ship.maxCargo}</div>
                </div>
                <div className="flex">
                    <div className="w-40">Plating:</div>
                    <div>{ship.plating}</div>
                </div>
                <div className="flex">
                    <div className="w-40">Speed:</div>
                    <div>{ship.speed}</div>
                </div>
                <div className="flex">
                    <div className="w-40">Weapons:</div>
                    <div>{ship.weapons}</div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white">
            <div className="font-bold text-xl px-6 py-4">Owned Ships</div>
            <div className="px-6 pb-4">
                {renderShips}
            </div>
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                <Link to="/ships/available" className="text-left text-blue-600 shadow-md border border-blue-300 bg-white rounded-full transition-all duration-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none px-4 py-2">
                    Show available ships
                </Link>
            </div>
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