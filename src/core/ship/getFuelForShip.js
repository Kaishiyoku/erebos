const getFuelForShip = (ship) => {
    const fuelGood = ship.cargo.find((item) => item.good === 'FUEL');

    if (!fuelGood) {
        return 'no fuel';
    }

    return `fuel: ${fuelGood.quantity}`;
};

export default getFuelForShip;