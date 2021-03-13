import Input from './button/Input';
import LoadingButton from './button/LoadingButton';
import {useForm} from 'react-hook-form';
import Select from './Select';
import LabelWithValueGroup from './LabelWithValueGroup';
import purchaseGoodRequest from '../core/api/purchaseGoodRequest';

function BuyGoodsDialog({ownedShipsAtLocation, selectedGood, callbackFn}) {
    const {register, handleSubmit, watch, errors, formState} = useForm({mode: 'onChange'});

    const watchQuantity = watch('quantity');

    const buyGoods = ({shipId, quantity}) => {
        purchaseGoodRequest(selectedGood.symbol, quantity, shipId).then((response) => {
            callbackFn();
        });
    };

    return (
        <form onSubmit={handleSubmit(buyGoods)}>
            <div className="text-xl pb-4">Buy {selectedGood.symbol}</div>

            <Select name="shipId" options={ownedShipsAtLocation.map((ship) => ({label: `${ship.type} - space available: ${ship.spaceAvailable}`, value: ship.id}))} className="mb-4" reference={register({required: true})}/>

            <Input name="quantity" placeholder="Quantity" type="number" min={0} className="mb-4" reference={register({required: true})}/>

            <LabelWithValueGroup entries={[{label: 'Cost', value: watchQuantity * selectedGood.pricePerUnit}, {label: 'Needed space', value: watchQuantity * selectedGood.volumePerUnit}]} showBackgrounds/>

            <LoadingButton type="submit" label="Buy goods" disabled={!formState.isValid}/>
        </form>
    );
}

export default BuyGoodsDialog;