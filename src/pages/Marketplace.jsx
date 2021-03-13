import {useEffect} from 'react';
import locationMarketplaceRequest from '../core/api/locationMarketplaceRequest';

function Marketplace(props) {
    useEffect(() => {
        locationMarketplaceRequest(props.systemSymbol);
    }, []);

    return (
        <div>Marketplace {props.systemSymbol}</div>
    );
}

export default Marketplace;