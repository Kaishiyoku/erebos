const getShipCargoFor = (goodSymbol, ship) => {
    if (!ship) {
        return 0;
    }

    return ship.cargo.find((item) => item.good === goodSymbol).quantity;
};

export default getShipCargoFor;