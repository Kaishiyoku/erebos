import PropTypes from 'prop-types';

function CardFooter({children}) {
    return (
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-50">
            {children}
        </div>
    );
}

CardFooter.propTypes = {
    children: PropTypes.node,
};

export default CardFooter;
