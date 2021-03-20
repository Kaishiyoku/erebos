import PropTypes from 'prop-types';
import Badge from './base/Badge';
import pascalCaseToWordsAndUpperCaseFirstChar from '../core/formatters/pascalCaseToWordsAndUpperCaseFirstChar';
import clsx from 'clsx';
import {length} from 'ramda';

function Cargo({cargo, className}) {
    if (length(cargo) === 0) {
        return <div className="text-gray-500">No cargo</div>;
    }

    return (
        <div className={clsx('flex space-x-2', className)}>
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
    className: PropTypes.string,
};

export default Cargo;