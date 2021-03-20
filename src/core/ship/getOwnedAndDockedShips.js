const getOwnedAndDockedShips = (ownedShips) => ownedShips.filter(({location}) => !!location);

export default getOwnedAndDockedShips;