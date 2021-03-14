import PropTypes from 'prop-types';

function TableHeaderRow({label}) {
    return (
        <th className="bg-gray-100 font-bold text-xs text-gray-800 uppercase border-b-2 border-gray-200 tracking-wide align-middle p-3 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600">
            {label}
        </th>
    );
}

TableHeaderRow.propTypes = {
    label: PropTypes.string.isRequired,
};

export default TableHeaderRow;