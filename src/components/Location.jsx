import Button from './base/button/Button';
import clsx from 'clsx';
import {useState} from 'react';
import hasOwnedShipsAtLocation from '../core/hasOwnedShipsAtLocation';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import ChevronUpIcon from '../icons/ChevronUpIcon';
import MarketplaceTable from './MarketplaceTable';
import getOwnedShipsAtLocation from '../core/getOwnedShipsAtLocation';
import pascalCaseToWordsAndUpperCaseFirstChar from '../core/pascalCaseToWordsAndUpperCaseFirstChar';

function Location({location, ownedShips}) {
    const [isDetailVisible, setIsDetailVisible] = useState(false);

    return (
        <div className="px-2 py-1 odd:bg-gray-50 dark:odd:bg-gray-900">
            <div className="flex items-center">
                <div className="w-12">{hasOwnedShipsAtLocation(ownedShips, location) && <Button icon={(isDetailVisible ? <ChevronUpIcon/> : <ChevronDownIcon/>)} size="sm" onClick={() => setIsDetailVisible(!isDetailVisible)}/>}</div>
                <div className="w-32">{location.symbol}</div>
                <div className="w-20">{location.x}, {location.y}</div>
                <div className="w-20">{location.name}</div>
                <div className="w-32">{pascalCaseToWordsAndUpperCaseFirstChar(location.type)}</div>
            </div>
            <div className={clsx('py-4', {hidden: !isDetailVisible})}>
                <div className="text-lg pb-2">Marketplace</div>

                <MarketplaceTable location={location} ownedShipsAtLocation={getOwnedShipsAtLocation(ownedShips, location)}/>
            </div>
        </div>
    );
}

export default Location;