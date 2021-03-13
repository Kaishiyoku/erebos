import PropTypes from 'prop-types';

function Cargo({cargo}) {
    if (!cargo) {
        return '/';
    }

    return (
        <div className="flex space-x-2">
            {cargo.map((item) => (
                <div key={item.good} className="flex items-center bg-gray-200 rounded-full text-xs px-2">
                    {item.quantity}/{item.totalVolume} {item.good}
                </div>
            ))}
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