import getOwnedShipsAtLocation from './getOwnedShipsAtLocation';

const hasOwnedShipsAtLocation = (ownedShips, location) => getOwnedShipsAtLocation(ownedShips, location).length > 0;

export default hasOwnedShipsAtLocation;