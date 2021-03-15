import PropTypes from 'prop-types';
import Location from './Location';
import Card from './Card/Card';
import CardBody from './Card/CardBody';

function SystemsList({systems, ownedShips}) {
    return systems.map((system) => (
        <Card key={system.symbol} headingLabel={`${system.symbol} :: ${system.name}`}>
            <CardBody>
                {system.locations.map((location) => <Location key={location.symbol} location={location} ownedShips={ownedShips}/>)}
            </CardBody>
        </Card>
    ));
}

SystemsList.propTypes = {
    systems: PropTypes.arrayOf(PropTypes.shape({
        locations: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            ships: PropTypes.array,
            symbol: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            x: PropTypes.number,
            y: PropTypes.number,
        })).isRequired,
        name: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
    })),
};

export default SystemsList;