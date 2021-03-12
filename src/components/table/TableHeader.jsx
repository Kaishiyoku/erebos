import PropTypes from 'prop-types';
import TableHeaderRow from './TableHeaderRow';

function TableHeader({labels}) {
    return (
        <thead>
            <tr>
                {labels.map((label) => <TableHeaderRow key={label} label={label}/>)}
            </tr>
        </thead>
    );
}

TableHeader.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeader;