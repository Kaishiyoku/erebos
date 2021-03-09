import {useEffect, useState} from 'react';
import ownedShipsRequest from '../core/api/ownedShipsRequest';
import purchaseShipRequest from '../core/api/purchaseShipRequest';
import LabelWithValueGroup from '../components/LabelWithValueGroup';
import formatNumber from '../core/formatNumber';

function AvailableShips() {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        ownedShipsRequest().then(({data}) => setShips(data.ships));
    }, []);

    const handlePurchaseShip = (type, location) => {
        purchaseShipRequest(type, location);
    };

    const getShipDisplayValuesFor = (ship) => [
        {label: 'Class', value: ship.class},
        {label: 'Type', value: ship.type},
        {label: 'Manufacturer', value: ship.manufacturer},
        {label: 'Maximum cargo', value: formatNumber(ship.maxCargo)},
        {label: 'Plating', value: ship.plating},
        {label: 'Speed', value: ship.speed},
        {label: 'Weapons', value: ship.weapons},
    ];

    return (
        <div>
            {ships.map((ship) => (
                <div key={ship.type} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white mb-4">
                    <div className="font-bold text-xl px-6 py-4">{ship.type}</div>
                    <div className="px-6 pb-4">
                        <LabelWithValueGroup entries={getShipDisplayValuesFor(ship)}/>

                        <div className="text-xl pb-2">Purchase locations</div>

                        <div>{ship.purchaseLocations.map((purchaseLocation) => (
                            <div key={purchaseLocation.location} className="flex px-2 py-1 odd:bg-gray-50">
                                <div className="w-40 text-gray-500">{purchaseLocation.location}</div>
                                <button onClick={() => handlePurchaseShip(ship.type, purchaseLocation.location)} className="text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">
                                    Buy ship for {formatNumber(purchaseLocation.price)} credits
                                </button>
                            </div>
                        ))}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AvailableShips;