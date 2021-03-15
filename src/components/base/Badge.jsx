import PropTypes from 'prop-types';

function Badge({label}) {
    return (
        <span className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
            {label}
        </span>
    );
}

Badge.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Badge;