import Table from './table/Table';
import TableBodyRow from './table/TableBodyRow';
import TableBodyCell from './table/TableBodyCell';
import Button from './button/Button';
import Modal from 'react-modal';
import {useState} from 'react';
import PropTypes from 'prop-types';
import BuyGoodsDialog from './BuyGoodsDialog';

function MarketplaceTable({planet, ownedShipsAtLocation}) {
    if (!planet) {
        return <div>Swag</div>;
    }

    const [isModalOpen, setIsModalOpen] = useState();
    const [selectedGood, setSelectedGood] = useState({});

    const handleOpenBuyModal = (good) => {
        setSelectedGood(good);

        setIsModalOpen(true);
    };

    return (
        <>
            <Table labels={['Name', 'Volume per unit', 'Price per unit', 'Quantity available', '']}>
                {planet.marketplace.map((good) => (
                    <TableBodyRow key={good.symbol}>
                        <TableBodyCell>{good.symbol}</TableBodyCell>
                        <TableBodyCell>{good.volumePerUnit}</TableBodyCell>
                        <TableBodyCell>{good.pricePerUnit}</TableBodyCell>
                        <TableBodyCell>{good.quantityAvailable}</TableBodyCell>
                        <TableBodyCell className="text-right">
                            <Button label="Buy" size="sm" onClick={() => handleOpenBuyModal(good)}/>
                        </TableBodyCell>
                    </TableBodyRow>
                ))}
            </Table>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Buy goods"
                closeTimeoutMS={500}
            >
                <BuyGoodsDialog ownedShipsAtLocation={ownedShipsAtLocation} selectedGood={selectedGood} callbackFn={() => setIsModalOpen(false)}/>
            </Modal>
        </>
    );
}

MarketplaceTable.propTypes = {
    ownedShipsAtLocation: PropTypes.array,
    planet: PropTypes.any,
};

export default MarketplaceTable;