const getOwnedShipsAtLocation = (ownedShips, location) => ownedShips.filter((ownedShip) => ownedShip.location === location.symbol);

export default getOwnedShipsAtLocation;