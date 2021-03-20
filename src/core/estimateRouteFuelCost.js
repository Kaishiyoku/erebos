import calculateDistance from './calculateDistance';

const estimateRouteFuelCost = (fromLocation, toLocation) => {
    const penalty = fromLocation.type === 'PLANET' ? 2 : 0;
    const distance = calculateDistance(fromLocation, toLocation);

    return Math.round(Math.round(distance) / 4) + penalty + 1;
};

export default estimateRouteFuelCost;