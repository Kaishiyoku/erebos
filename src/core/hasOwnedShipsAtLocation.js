import getOwnedShipsAtLocation from './getOwnedShipsAtLocation';
import {length} from 'ramda';

const hasOwnedShipsAtLocation = (ownedShips, location) => length(getOwnedShipsAtLocation(ownedShips, location)) > 0;

export default hasOwnedShipsAtLocation;