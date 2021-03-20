import getOwnedAndDockedShips from '../ship/getOwnedAndDockedShips';

const getLocationsWithDockedShips = (systems, ownedShips) => systems
    .map((system) => system.locations
        .filter((location) => getOwnedAndDockedShips(ownedShips)
            .map(({location: shipLocation}) => shipLocation).includes(location.symbol)
        )
    )
    .flat();

export default getLocationsWithDockedShips;