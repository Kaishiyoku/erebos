import Table from './table/Table';
import TableBodyRow from './table/TableBodyRow';
import TableBodyCell from './table/TableBodyCell';
import Button from './base/button/Button';
import {useState} from 'react';
import PropTypes from 'prop-types';
import BuyGoodsDialog from './BuyGoodsDialog';
import SellGoodsDialog from './SellGoodsDialog';
import ModalDialog from './base/ModalDialog';
import hasOwnedShipsAtLocation from '../core/hasOwnedShipsAtLocation';
import pascalCaseToWordsAndUpperCaseFirstChar from '../core/pascalCaseToWordsAndUpperCaseFirstChar';

function MarketplaceTable({location, ownedShipsAtLocation}) {
    if (!hasOwnedShipsAtLocation(ownedShipsAtLocation, location)) {
        return null;
    }

    const {marketplace} = location;

    const [isBuyGoodsModalOpen, setIsBuyGoodsModalOpen] = useState(false);
    const [isSellGoodsModalOpen, setIsSellGoodsModalOpen] = useState(false);
    const [selectedGood, setSelectedGood] = useState({});

    const handleOpenBuyGoodsModal = (good) => {
        setSelectedGood(good);

        setIsBuyGoodsModalOpen(true);
    };

    const handleOpenSellGoodsModal = (good) => {
        setSelectedGood(good);

        setIsSellGoodsModalOpen(true);
    };

    return (
        <>
            <Table labels={['Name', 'Volume per unit', 'Price per unit', 'Quantity available', 'Actions']} hovered size="sm">
                {marketplace.map((good) => (
                    <TableBodyRow key={good.symbol}>
                        <TableBodyCell key="symbol">{pascalCaseToWordsAndUpperCaseFirstChar(good.symbol)}</TableBodyCell>
                        <TableBodyCell key="volumePerUnit">{good.volumePerUnit}</TableBodyCell>
                        <TableBodyCell key="pricePerUnit">{good.pricePerUnit}</TableBodyCell>
                        <TableBodyCell key="quantityAvailable">{good.quantityAvailable}</TableBodyCell>
                        <TableBodyCell className="text-right flex space-x-2" key="actions">
                            <Button label="Buy" size="sm" onClick={() => handleOpenBuyGoodsModal(good)}/>
                            {ownedShipsAtLocation.some((ship) => ship.cargo.find((cargo) => cargo.good === good.symbol)) && <Button label="Sell" size="sm" onClick={() => handleOpenSellGoodsModal(good)}/>}
                        </TableBodyCell>
                    </TableBodyRow>
                ))}
            </Table>

            <ModalDialog
                isOpen={isBuyGoodsModalOpen}
                onRequestClose={() => setIsBuyGoodsModalOpen(false)}
                contentLabel="Buy goods"
            >
                <BuyGoodsDialog ownedShipsAtLocation={ownedShipsAtLocation} selectedGood={selectedGood} callbackFn={() => setIsBuyGoodsModalOpen(false)}/>
            </ModalDialog>

            <ModalDialog
                isOpen={isSellGoodsModalOpen}
                onRequestClose={() => setIsSellGoodsModalOpen(false)}
                contentLabel="Sell goods"
            >
                <SellGoodsDialog ownedShipsAtLocation={ownedShipsAtLocation} selectedGood={selectedGood} callbackFn={() => setIsSellGoodsModalOpen(false)}/>
            </ModalDialog>
        </>
    );
}

MarketplaceTable.propTypes = {
    location: PropTypes.object,
    ownedShipsAtLocation: PropTypes.array,
};

export default MarketplaceTable;