import PropTypes from 'prop-types';

function TableBody({hovered, children}) {
    return (
        <tbody className="divide-y divide-solid divide-gray-200 dark:divide-gray-700">
            {children.map((child) => {
                return <child.type key={child.key} {...child.props} hovered={hovered}/>;
            })}
        </tbody>
    );
}

TableBody.propTypes = {
    children: PropTypes.node,
    hovered: PropTypes.bool,
};

TableBody.defaultProps = {
    children: [],
    hovered: false,
};

export default TableBody;