const getShipCargoFor = (goodSymbol, ship) => {
    if (!ship) {
        return 0;
    }

    const good = ship.cargo.find((item) => item.good === goodSymbol);

    if (!good) {
        return 0;
    }

    return good.quantity;
};

export default getShipCargoFor;