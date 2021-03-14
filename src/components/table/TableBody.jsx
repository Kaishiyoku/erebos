import PropTypes from 'prop-types';

function TableBody({size, hovered, children}) {
    return (
        <tbody className="divide-y divide-solid divide-gray-200 dark:divide-gray-700">
            {children.map((child) => <child.type key={child.key} {...child.props} hovered={hovered} size={size}/>)}
        </tbody>
    );
}

TableBody.propTypes = {
    children: PropTypes.node,
    hovered: PropTypes.bool,
    size: PropTypes.oneOf(['base', 'sm']),
};

TableBody.defaultProps = {
    children: [],
    hovered: false,
    size: 'base',
};

export default TableBody;