import {useEffect} from 'react';
import locationMarketplaceRequest from '../core/api_requests/locations/locationMarketplaceRequest';

function Marketplace(props) {
    useEffect(() => {
        locationMarketplaceRequest(props.systemSymbol);
    }, []);

    return (
        <div>Marketplace {props.systemSymbol}</div>
    );
}

export default Marketplace;