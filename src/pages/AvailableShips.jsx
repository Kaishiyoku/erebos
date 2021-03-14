import {useEffect, useState} from 'react';
import purchaseShipRequest from '../core/api/purchaseShipRequest';
import LabelWithValueGroup from '../components/LabelWithValueGroup';
import formatNumber from '../core/formatNumber';
import MultiLoadingButton from '../components/button/MultiLoadingButton';
import availableShipsRequest from '../core/api/availableShipsRequest';
import SubHeading from '../components/SubHeading';
import Heading from '../components/Heading';

function AvailableShips() {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        availableShipsRequest().then(({data}) => setShips(data.ships));
    }, []);

    return (
        <>
            <Heading label="Ship market"/>

            {ships.map((ship) => (
                <div key={ship.type} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white mb-4 dark:border-gray-700 dark:bg-gray-800">
                    <div className="font-bold text-xl px-6 py-4">{ship.type}</div>
                    <div className="px-6 pb-4">
                        <LabelWithValueGroup
                            entries={[
                                {label: 'Class', value: ship.class},
                                {label: 'Type', value: ship.type},
                                {label: 'Manufacturer', value: ship.manufacturer},
                                {label: 'Maximum cargo', value: formatNumber(ship.maxCargo)},
                                {label: 'Plating', value: ship.plating},
                                {label: 'Speed', value: ship.speed},
                                {label: 'Weapons', value: ship.weapons},
                            ]}
                        />

                        <SubHeading label="Purchase locations"/>

                        <div>{ship.purchaseLocations.map((purchaseLocation) => (
                            <div key={purchaseLocation.location} className="flex items-center px-2 py-1 odd:bg-gray-50 dark:odd:bg-gray-900">
                                <div className="w-40 text-gray-500">{purchaseLocation.location}</div>
                                <MultiLoadingButton
                                    label={`Buy ship for ${formatNumber(purchaseLocation.price)} credits`}
                                    size="sm"
                                    promiseFn={() => purchaseShipRequest(ship.type, purchaseLocation.location)}
                                />
                            </div>
                        ))}</div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AvailableShips;