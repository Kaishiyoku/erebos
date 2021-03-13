import * as PropTypes from 'prop-types';

function TableBodyRow({value}) {
    return (
        <td className="align-middle py-4 px-3">
            {value}
        </td>
    );
}

TableBodyRow.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]).isRequired,
};

export default TableBodyRow;