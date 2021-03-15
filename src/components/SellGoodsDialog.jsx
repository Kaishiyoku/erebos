import Input from './input/Input';
import LoadingButton from './base/button/LoadingButton';
import {useForm} from 'react-hook-form';
import Select from './input/Select';
import LabelWithValueGroup from './base/LabelWithValueGroup';
import sellGoodRequest from '../core/api_requests/goods/sellGoodRequest';
import {useEffect, useState} from 'react';
import {head, prop, toString} from 'ramda';
import getShipCargoFor from '../core/getShipCargoFor';
import pascalCaseToWords from '../core/pascalCaseToWords';
import {toast} from 'react-toastify';
import pascalCaseToWordsAndUpperCaseFirstChar from '../core/pascalCaseToWordsAndUpperCaseFirstChar';

function SellGoodsDialog({ownedShipsAtLocation, selectedGood, callbackFn}) {
    const {register, handleSubmit, watch, errors, formState} = useForm({mode: 'onChange'});
    const [selectedShip, setSelectedShip] = useState();

    const watchQuantity = watch('quantity');

    useEffect(() => {
        setSelectedShip(head(ownedShipsAtLocation));
    }, []);

    const sellGoods = ({shipId, quantity}) => {
        sellGoodRequest(selectedGood.symbol, quantity, shipId).then((response) => {
            toast.success(`${quantity}x ${pascalCaseToWordsAndUpperCaseFirstChar(selectedGood.symbol)} sold.`);

            callbackFn();
        });
    };

    const shipOptions = ownedShipsAtLocation.map((ship) => ({label: ship.type, value: ship.id}));

    const handleSelectedShipChange = (event) => {
        setSelectedShip(ownedShipsAtLocation.find((ship) => ship.id === event.target.value));
    };

    return (
        <form onSubmit={handleSubmit(sellGoods)}>
            <div className="text-xl pb-4">Sell {pascalCaseToWords(selectedGood.symbol)}</div>

            <Select name="shipId" options={shipOptions} className="mb-4" value={prop('id', selectedShip)} onChange={handleSelectedShipChange} reference={register({required: true})}/>

            <Input name="quantity" placeholder="Quantity" type="number" min={0} max={getShipCargoFor(selectedGood.symbol, selectedShip)} className="mb-4" reference={register({required: true})}/>

            <LabelWithValueGroup
                labelWidthClass="w-48"
                entries={[
                    {label: 'In ship cargo', value: getShipCargoFor(selectedGood.symbol, selectedShip)},
                    {label: 'Ship space available', value: prop('spaceAvailable', selectedShip)},
                    {label: 'Gaining credits', value: toString(watchQuantity * selectedGood.pricePerUnit)},
                    {label: 'Gaining space', value: toString(watchQuantity * selectedGood.volumePerUnit)},
                ]}
                showBackgrounds
            />

            <LoadingButton type="submit" label="Sell goods" disabled={!formState.isValid}/>
        </form>
    );
}

export default SellGoodsDialog;