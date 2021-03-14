import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableBodyRow({size, hovered, children}) {
    const className = clsx({
        'transition-all hover:bg-gray-100 hover:bg-opacity-50 dark:hover:bg-black dark:hover:bg-opacity-25': hovered,
    });

    return (
        <tr className={className}>
            {children.map((child) => <child.type key={child.key} {...child.props} size={size}/>)}
        </tr>
    );
}

TableBodyRow.propTypes = {
    children: PropTypes.node,
    hovered: PropTypes.bool,
    size: PropTypes.oneOf(['base', 'sm']),
};

TableBodyRow.defaultProps = {
    hovered: false,
    size: 'base',
};

export default TableBodyRow;