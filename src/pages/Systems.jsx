import {useEffect, useState} from 'react';
import systemsInfoRequest from '../core/api/systemsInfoRequest';
import ownedShipsRequest from '../core/api/ownedShipsRequest';
import Table from '../components/table/Table';
import Button from '../components/button/Button';
import TableBodyRow from '../components/table/TableBodyRow';
import TableBodyCell from '../components/table/TableBodyCell';

function Systems() {
    const [systems, setSystems] = useState([]);
    const [ownedShips, setOwnedShips] = useState([]);

    useEffect(() => {
        systemsInfoRequest().then(({data}) => {
            setSystems(data.systems);
        });

        ownedShipsRequest().then(({data}) => {
            setOwnedShips(data.ships);
        });
    }, []);

    return (
        <div>
            <div className="text-2xl pb-4">Systems</div>

            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 mb-8">
                <div className="font-bold text-xl px-6 py-4">Owned ships</div>
                <div className="px-6 pb-4">
                    <Table labels={['Type', 'Location', '']} hovered>
                        {ownedShips.map(({type, location}) => (
                            <TableBodyRow key={type}>
                                <TableBodyCell>{type}</TableBodyCell>
                                <TableBodyCell>{location}</TableBodyCell>
                                <TableBodyCell><Button label="Route" size="sm"/></TableBodyCell>
                            </TableBodyRow>
                        ))}
                    </Table>
                </div>
            </div>

            {systems.map((system) => (
                <div key={system.symbol} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 mb-4">
                    <div className="font-bold text-xl px-6 py-4">{system.symbol} :: {system.name}</div>
                    <div className="px-6 pb-4">
                        <Table labels={['Symbol', 'X', 'Y', 'Name', 'Type']} hovered>
                            {system.locations.map(({symbol, x, y, name, type}) => (
                                <TableBodyRow key={symbol}>
                                    <TableBodyCell>{symbol}</TableBodyCell>
                                    <TableBodyCell>{x}</TableBodyCell>
                                    <TableBodyCell>{y}</TableBodyCell>
                                    <TableBodyCell>{name}</TableBodyCell>
                                    <TableBodyCell>{type}</TableBodyCell>
                                </TableBodyRow>
                            ))}
                        </Table>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Systems;