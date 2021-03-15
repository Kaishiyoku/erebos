import LabelWithValue from './base/LabelWithValue';
import PropTypes from 'prop-types';
import ActiveLoans from './ActiveLoans';
import formatInteger from '../core/formatInteger';
import Card from './Card/Card';
import CardBody from './Card/CardBody';

function UserInfo({userInfo}) {
    if (!userInfo) {
        return null;
    }

    const {user} = userInfo;
    const {username, credits, loans} = user;

    return (
        <Card className="mb-8">
            <CardBody>
                <LabelWithValue label="User name" value={username} showBackgrounds={false}/>
                <LabelWithValue label="Credits" value={`${formatInteger(credits)}`} showBackgrounds={false}/>

                <ActiveLoans loans={loans} className="mt-8"/>
            </CardBody>
        </Card>
    );
}

UserInfo.propTypes = {
    userInfo: PropTypes.object,
};

UserInfo.defaultProps = {
    userInfo: null,
};

export default UserInfo;