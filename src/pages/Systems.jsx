import {useEffect, useState} from 'react';
import systemsInfoRequest from '../core/api/systemsInfoRequest';
import ownedShipsRequest from '../core/api/ownedShipsRequest';
import Table from '../components/table/Table';
import Button from '../components/button/Button';

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
                    <Table labels={['Type', 'Location', '']} values={ownedShips.map(({type, location}) => [type, location, <Button label="Route" size="sm"/>])} hovered/>
                </div>
            </div>

            {systems.map((system) => (
                <div key={system.symbol} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 mb-4">
                    <div className="font-bold text-xl px-6 py-4">{system.symbol} :: {system.name}</div>
                    <div className="px-6 pb-4">
                        <Table labels={['Symbol', 'X', 'Y', 'Name', 'Type']} values={system.locations.map(({symbol, x, y, name, type}) => [symbol, x, y, name, type])} hovered/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Systems;