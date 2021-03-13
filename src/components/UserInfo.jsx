import LabelWithValue from './LabelWithValue';
import PropTypes from 'prop-types';
import formatNumber from '../core/formatNumber';
import ActiveLoans from './ActiveLoans';

function UserInfo({userData, ...otherProps}) {
    if (!userData) {
        return null;
    }

    const {user} = userData;
    const {username, credits, loans} = user;

    return (
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white mb-8 dark:border-gray-700 dark:bg-gray-800" {...otherProps}>
            <div className="px-6 py-4">
                <LabelWithValue label="User name" value={username} showBackgrounds={false}/>
                <LabelWithValue label="Credits" value={formatNumber(credits)} showBackgrounds={false}/>

                <ActiveLoans loans={loans} className="mt-8"/>
            </div>
        </div>
    );
}

UserInfo.propTypes = {
    userData: PropTypes.object,
};

UserInfo.defaultProps = {
    userData: null,
};

export default UserInfo;