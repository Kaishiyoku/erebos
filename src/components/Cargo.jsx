import PropTypes from 'prop-types';
import Badge from './Badge';

function Cargo({cargo}) {
    if (!cargo) {
        return '/';
    }

    return (
        <div className="flex space-x-2">
            {cargo.map((item) => <Badge key={item.good} label={`${item.quantity}/${item.totalVolume} ${item.good}`}/>)}
        </div>
    );
}

Cargo.propTypes = {
    cargo: PropTypes.arrayOf(PropTypes.shape({
        good: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        totalVolume: PropTypes.number.isRequired,
    })),
};

export default Cargo;