import PropTypes from 'prop-types';
import CardHeading from './CardHeading';

function Card({children, headingActionButton, headingLabel, headingSubLabel}) {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700">
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