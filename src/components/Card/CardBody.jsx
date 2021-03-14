import PropTypes from 'prop-types';
import clsx from 'clsx';

function CardBody({children, className}) {
    return (
        <div className={clsx('px-6 pb-4', className)}>
            {children}
        </div>
    );
}

CardBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default CardBody;