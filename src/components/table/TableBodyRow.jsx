import * as PropTypes from 'prop-types';
import clsx from 'clsx';

function TableBodyRow({children, hovered}) {
    const className = clsx({
        'transition-all hover:bg-gray-50 dark:hover:bg-gray-900 dark:hover:bg-opacity-50': hovered,
    });

    return (
        <tr className={className}>
            {children}
        </tr>
    );
}

TableBodyRow.propTypes = {
    children: PropTypes.node,
    hovered: PropTypes.bool,
};

TableBodyRow.defaultProps = {
    hovered: false,
};

export default TableBodyRow;