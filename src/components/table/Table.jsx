import TableHeader from './TableHeader';
import PropTypes from 'prop-types';
import TableBody from './TableBody';

function Table({hovered, labels, children}) {
    return (
        <table className="w-full text-left">
            <TableHeader labels={labels}/>
            <TableBody hovered={hovered}>
                {children}
            </TableBody>
        </table>
    );
}

Table.propTypes = {
    children: PropTypes.node,
    hovered: PropTypes.bool,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Table.defaultProps = {
    children: [],
    hovered: false,
};

export default Table;