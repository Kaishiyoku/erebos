import {useEffect, useState} from 'react';
import systemsInfoRequest from '../core/api/systemsInfoRequest';
import ownedShipsRequest from '../core/api/ownedShipsRequest';
import Table from '../components/table/Table';
import Button from '../components/button/Button';
import TableBodyRow from '../components/table/TableBodyRow';
import TableBodyCell from '../components/table/TableBodyCell';
import Modal from 'react-modal';
import SystemsList from '../components/SystemsList';
import submitFlightPlanRequest from '../core/api/submitFlightPlanRequest';
import formatDecimal from '../core/formatDecimal';

function Systems() {
    const [systems, setSystems] = useState([]);
    const [ownedShips, setOwnedShips] = useState([]);
    const [isRouteSelectionModalOpen, setIsRouteSelectionModalOpen] = useState(false);
    const [selectedShip, setSelectedShip] = useState({});

    useEffect(() => {
        systemsInfoRequest().then(({data}) => {
            setSystems(data.systems);
        });

        ownedShipsRequest().then(({data}) => {
            setOwnedShips(data.ships);
        });
    }, []);

    const handleRouteClick = (shipId) => {
        setSelectedShip(ownedShips.find((ownedShip) => ownedShip.id === shipId));

        setIsRouteSelectionModalOpen(true);
    };

    const calculateDistance = ({x: x1, y: y1}, {x: x2, y: y2}) => {
        return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    };

    return (
        <div>
            <Modal
                isOpen={isRouteSelectionModalOpen}
                onRequestClose={() => setIsRouteSelectionModalOpen(false)}
                contentLabel="Select route"
                closeTimeoutMS={500}
            >
                <div>Current location: {selectedShip.location} ({selectedShip.x}, {selectedShip.y})</div>
                <div>Target location:</div>
                <div>
                    {systems.map((system) => (
                        <div key={system.symbol}>
                            <div className="text-lg">{system.symbol} :: {system.name}</div>
                            <div>
                                {system.locations.map((location) => (
                                    <div key={location.symbol} className="flex">
                                        <div>{location.symbol} ({location.x}, {location.y}) - {formatDecimal(calculateDistance(selectedShip, location))}</div>
                                        <Button label="Route" size="sm" onClick={() => submitFlightPlanRequest(location.symbol, selectedShip.id)}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>

            <div className="text-2xl pb-4">Systems</div>

            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 mb-8">
                <div className="font-bold text-xl px-6 py-4">Owned ships</div>
                <div className="px-6 pb-4">
                    <Table labels={['Type', 'Location', '']} hovered>
                        {ownedShips.map(({id, type, location}) => (
                            <TableBodyRow key={type}>
                                <TableBodyCell>{type}</TableBodyCell>
                                <TableBodyCell>{location}</TableBodyCell>
                                <TableBodyCell><Button label="Route" size="sm" onClick={() => handleRouteClick(id)}/></TableBodyCell>
                            </TableBodyRow>
                        ))}
                    </Table>
                </div>
            </div>

            <SystemsList systems={systems} ownedShips={ownedShips}/>
        </div>
    );
}

export default Systems;