import {partial} from 'ramda';
import purchaseGoodRequest from './purchaseGoodRequest';

const purchaseShipFuelRequest = partial(purchaseGoodRequest, ['FUEL']);

export default purchaseShipFuelRequest;