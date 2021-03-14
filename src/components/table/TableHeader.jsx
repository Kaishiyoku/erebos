import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableHeader({size, labels}) {
    const classes = clsx('bg-gray-100 font-bold text-xs text-gray-800 uppercase border-b-2 border-gray-200 tracking-wide align-middle dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600', {
        'p-3': size === 'base',
        'py-2 px-3': size === 'sm',
    });

    return (
        <thead>
            <tr>
                {labels.map((label) => <th key={label} className={classes}>{label}</th>)}
            </tr>
        </thead>
    );
}

TableHeader.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.oneOf(['base', 'sm']),
};

export default TableHeader;