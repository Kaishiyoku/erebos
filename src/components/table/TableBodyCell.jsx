import PropTypes from 'prop-types';

function TableBodyCell({children}) {
    return (
        <td className="align-middle py-4 px-3">
            {children}
        </td>
    );
}

TableBodyCell.propTypes = {
    children: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]),
};

export default TableBodyCell;