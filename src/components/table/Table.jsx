import TableHeader from './TableHeader';
import PropTypes from 'prop-types';
import TableBody from './TableBody';

function Table({hovered, labels, values}) {
    return (
        <table className="w-full text-left">
            <TableHeader labels={labels}/>
            <TableBody values={values} hovered={hovered}/>
        </table>
    );
}

Table.propTypes = {
    hovered: PropTypes.bool,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))).isRequired,
};

Table.defaultProps = {
    hovered: false,
};

export default Table;