import PropTypes from 'prop-types';
import clsx from 'clsx';

function CardHeadingActionButton({icon, className, ...otherProps}) {
    return (
        <button
            className={clsx('p-2 text-xl rounded-full mt-1 mr-1 text-gray-500 transition-all duration-200 hover:bg-gray-100 focus:text-gray-700 focus:bg-gray-200 outline-none focus:outline-none', className)}
            {...otherProps}
        >
            {icon}
        </button>
    );
}

CardHeadingActionButton.propTypes = {
    icon: PropTypes.node,
};

export default CardHeadingActionButton;