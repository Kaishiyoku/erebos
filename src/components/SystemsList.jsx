import Table from './table/Table';
import TableBodyRow from './table/TableBodyRow';
import TableBodyCell from './table/TableBodyCell';
import PropTypes from 'prop-types';

function SystemsList({systems}) {
    return systems.map((system) => (
        <div key={system.symbol} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 mb-4">
            <div className="font-bold text-xl px-6 py-4">{system.symbol} :: {system.name}</div>
            <div className="px-6 pb-4">
                <Table labels={['Symbol', 'Coordinates', 'Name', 'Type']} hovered>
                    {system.locations.map(({symbol, x, y, name, type}) => (
                        <TableBodyRow key={symbol}>
                            <TableBodyCell>{symbol}</TableBodyCell>
                            <TableBodyCell>{x}, {y}</TableBodyCell>
                            <TableBodyCell>{name}</TableBodyCell>
                            <TableBodyCell>{type}</TableBodyCell>
                        </TableBodyRow>
                    ))}
                </Table>
            </div>
        </div>
    ));
}

SystemsList.propTypes = {
    systems: PropTypes.arrayOf(PropTypes.shape({
        locations: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            ships: PropTypes.array,
            symbol: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            x: PropTypes.number,
            y: PropTypes.number,
        })).isRequired,
        name: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
    })),
};

export default SystemsList;