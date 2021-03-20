import Button from './base/button/Button';
import clsx from 'clsx';
import {useContext, useState} from 'react';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import ChevronUpIcon from '../icons/ChevronUpIcon';
import MarketplaceTable from './MarketplaceTable';
import getOwnedShipsAtLocation from '../core/location/getOwnedShipsAtLocation';
import pascalCaseToWordsAndUpperCaseFirstChar from '../core/formatters/pascalCaseToWordsAndUpperCaseFirstChar';
import MarketplacesContext from '../contexts/MarketplacesContext';
import formatDateTime from '../core/formatters/formatDateTime';
import {parseJSON} from 'date-fns';

function Location({location, ownedShips}) {
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [marketplaces] = useContext(MarketplacesContext);

    const marketplace = marketplaces.find((item) => item.locationSymbol === location.symbol);

    return (
        <div className="px-2 py-1 odd:bg-gray-50 dark:odd:bg-gray-900">
            <div className="flex items-center">
                <div className="w-12">{marketplace && <Button icon={(isDetailVisible ? <ChevronUpIcon/> : <ChevronDownIcon/>)} size="sm" onClick={() => setIsDetailVisible(!isDetailVisible)}/>}</div>
                <div className="w-32">{location.symbol}</div>
                <div className="w-20">{location.x}, {location.y}</div>
                <div className="w-28">{location.name}</div>
                <div className="w-32">{pascalCaseToWordsAndUpperCaseFirstChar(location.type)}</div>
            </div>
            <div className={clsx('py-4', {hidden: !isDetailVisible})}>
                <div className="text-lg">Marketplace</div>
                <div className="text-sm text-gray-500 pb-4">Last update: {marketplace ? formatDateTime(parseJSON(marketplace.updatedAt)) : 'never'}</div>

                <MarketplaceTable marketplace={marketplace} ownedShipsAtLocation={getOwnedShipsAtLocation(ownedShips, location)}/>
            </div>
        </div>
    );
}

export default Location;