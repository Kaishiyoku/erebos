import {useEffect} from 'react';
import logout from '../core/local_storage/logout';
import {Link} from '@reach/router';

function Logout() {
    useEffect(logout, []);

    return (
        <div className="mb-4 px-3 py-4 bg-green-100 border-l-4 border-green-300 rounded">
            <div>You have been logged out.</div>

            <Link to="/" className="py-2 text-blue-600 cursor-pointer hover:text-blue-800 hover:underline">Back to landing page.</Link>
        </div>
    );
}

export default Logout;