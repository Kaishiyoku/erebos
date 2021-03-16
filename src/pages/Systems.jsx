import {useContext, useEffect, useState} from 'react';
import systemsInfoRequest from '../core/api_requests/locations/systemsInfoRequest';
import Table from '../components/table/Table';
import Button from '../components/base/button/Button';
import TableBodyRow from '../components/table/TableBodyRow';
import TableBodyCell from '../components/table/TableBodyCell';
import SystemsList from '../components/SystemsList';
import submitFlightPlanRequest from '../core/api_requests/flight_plans/submitFlightPlanRequest';
import formatDecimal from '../core/formatDecimal';
import ModalDialog from '../components/base/ModalDialog';
import UserInfoContext from '../UserInfoContext';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';

function Systems() {
    const [systems, setSystems] = useState([]);
    const [isRouteSelectionModalOpen, setIsRouteSelectionModalOpen] = useState(false);
    const [selectedShip, setSelectedShip] = useState({});
    const [userInfo] = useContext(UserInfoContext);

    const ownedShips = userInfo.user.ships;

    useEffect(() => {
        systemsInfoRequest().then(({data}) => {
            setSystems(data.systems);
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
            <ModalDialog
                isOpen={isRouteSelectionModalOpen}
                onRequestClose={() => setIsRouteSelectionModalOpen(false)}
                contentLabel="Select route"
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
            </ModalDialog>

            <div className="text-2xl pb-4">Systems</div>

            <Card headingLabel="Owned ships" className="mb-8">
                <CardBody>
                    <Table labels={['Type', 'Location', 'Actions']} hovered>
                        {ownedShips.map(({id, type, location}) => (
                            <TableBodyRow key={id}>
                                <TableBodyCell key="type">{type}</TableBodyCell>
                                <TableBodyCell key="location">{location || 'in transit'}</TableBodyCell>
                                <TableBodyCell key="actions"><Button label="Route" size="sm" onClick={() => handleRouteClick(id)}/></TableBodyCell>
                            </TableBodyRow>
                        ))}
                    </Table>
                </CardBody>
            </Card>

            <SystemsList systems={systems} ownedShips={ownedShips}/>
        </div>
    );
}

export default Systems;