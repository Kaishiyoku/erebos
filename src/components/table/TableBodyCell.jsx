import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableBodyCell({children, className}) {
    return (
        <td className={clsx('align-middle py-4 px-3')}>
            {children}
        </td>
    );
}

TableBodyCell.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export default TableBodyCell;