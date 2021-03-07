import {useEffect, useState} from 'react';
import ownedShipsRequest from '../core/api/ownedShipsRequest';
import purchaseShipRequest from '../core/api/purchaseShipRequest';

function AvailableShips() {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        ownedShipsRequest().then(({data}) => setShips(data.ships));
    }, []);

    const handlePurchaseShip = (type, location) => {
        purchaseShipRequest(type, location);
    };

    return (
        <div>
            {ships.map((ship) => (
                <div key={ship.type} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white mb-4">
                    <div className="font-bold text-xl px-6 py-4">{ship.type}</div>
                    <div className="px-6 pb-4">
                        <div>Class: {ship.class}</div>
                        <div>Manufacturer: {ship.manufacturer}</div>
                        <div>maxCargo: {ship.maxCargo}</div>
                        <div>plating: {ship.plating}</div>
                        <div>speed: {ship.speed}</div>
                        <div>weapons: {ship.weapons}</div>
                        <div>purchaseLocations: {ship.purchaseLocations.map((purchaseLocation) => (
                            <div key={purchaseLocation.location}>
                                <div>Location: {purchaseLocation.location}</div>
                                <div>Price: {purchaseLocation.price}</div>
                                <button onClick={() => handlePurchaseShip(ship.type, purchaseLocation.location)} className="text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">
                                    Buy ship
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