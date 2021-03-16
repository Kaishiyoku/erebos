import PropTypes from 'prop-types';
import Badge from './base/Badge';
import pascalCaseToWordsAndUpperCaseFirstChar from '../core/pascalCaseToWordsAndUpperCaseFirstChar';

function Cargo({cargo}) {
    if (!cargo) {
        return '/';
    }

    return (
        <div className="flex space-x-2">
            {cargo.map((item) => <Badge key={item.good} label={`${item.quantity}/${item.totalVolume} ${pascalCaseToWordsAndUpperCaseFirstChar(item.good)}`}/>)}
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