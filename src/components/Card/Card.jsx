import PropTypes from 'prop-types';
import CardHeading from './CardHeading';
import clsx from 'clsx';

function Card({children, headingActionButton, headingLabel, headingSubLabel, className}) {
    return (
        <div className={clsx('rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-800', className, {'pt-5': !headingLabel})}>
            {headingLabel && <CardHeading actionButton={headingActionButton} label={headingLabel} subLabel={headingSubLabel}/>}

            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node,
    headingActionButton: PropTypes.node,
    headingLabel: PropTypes.string,
    headingSubLabel: PropTypes.string,
};

export default Card;