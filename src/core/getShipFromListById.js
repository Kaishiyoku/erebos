const getShipFromListById = (shipId, ships) => ships.find((ship) => ship.id === shipId);

export default getShipFromListById;