import {useEffect, useState} from 'react';
import purchaseShipRequest from '../core/api/purchaseShipRequest';
import LabelWithValueGroup from '../components/base/LabelWithValueGroup';
import MultiLoadingButton from '../components/base/button/MultiLoadingButton';
import availableShipsRequest from '../core/api/availableShipsRequest';
import SubHeading from '../components/base/SubHeading';
import Heading from '../components/base/Heading';
import formatInteger from '../core/formatInteger';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';
import {toast} from 'react-toastify';

function ShipMarket() {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        availableShipsRequest().then(({data}) => setShips(data.ships));
    }, []);

    return (
        <>
            <Heading label="Ship market"/>

            <div className="grid lg:grid-cols-2 gap-4 mb-8">
                {ships.map((ship) => (
                    <Card key={ship.type} headingLabel={ship.type}>
                        <CardBody>
                            <LabelWithValueGroup
                                entries={[
                                    {label: 'Class', value: ship.class},
                                    {label: 'Type', value: ship.type},
                                    {label: 'Manufacturer', value: ship.manufacturer},
                                    {label: 'Maximum cargo', value: formatInteger(ship.maxCargo)},
                                    {label: 'Plating', value: ship.plating},
                                    {label: 'Speed', value: ship.speed},
                                    {label: 'Weapons', value: ship.weapons},
                                ]}
                            />

                            <SubHeading label="Purchase locations"/>

                            <div>{ship.purchaseLocations.map((purchaseLocation) => (
                                <div key={purchaseLocation.location} className="flex items-center px-2 py-1 odd:bg-gray-50 dark:odd:bg-gray-900">
                                    <div className="w-48">
                                        <div>{purchaseLocation.location}</div>

                                        <div className="text-sm text-gray-500">{formatInteger(purchaseLocation.price)} credits</div>
                                    </div>
                                    <MultiLoadingButton
                                        label="Buy ship"
                                        size="sm"
                                        promiseFn={() => purchaseShipRequest(ship.type, purchaseLocation.location)}
                                        onSuccess={() => toast.success('Ship bought.')}
                                    />
                                </div>
                            ))}</div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default ShipMarket;