import TableHeader from './TableHeader';
import PropTypes from 'prop-types';
import TableBody from './TableBody';

function Table({size, hovered, labels, children}) {
    return (
        <table className="w-full text-left">
            <TableHeader labels={labels} size={size}/>
            <TableBody hovered={hovered} size={size}>
                {children}
            </TableBody>
        </table>
    );
}

Table.propTypes = {
    children: PropTypes.node,
    hovered: PropTypes.bool,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.oneOf(['base', 'sm']),
};

Table.defaultProps = {
    children: [],
    hovered: false,
    size: 'base',
};

export default Table;