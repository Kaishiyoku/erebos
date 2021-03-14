import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableBodyCell({children, size, className}) {
    const classes = clsx('align-middle', className, {
        'py-1 px-3': size === 'sm',
        'py-4 px-3': size === 'base',
    });

    return (
        <td className={classes}>
            {children}
        </td>
    );
}

TableBodyCell.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    size: PropTypes.oneOf(['base', 'sm']),
};

TableBodyCell.defaultProps = {
    size: 'base',
};

export default TableBodyCell;