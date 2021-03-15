import PropTypes from 'prop-types';
import clsx from 'clsx';

function LabelWithValue({label, labelWidthClass, showBackgrounds, value}) {
    return (
        <div className={clsx('flex items-center px-2 py-1', {'odd:bg-gray-50 dark:odd:bg-gray-900 dark:odd:bg-opacity-25': showBackgrounds})}>
            <div className={clsx('text-gray-500', labelWidthClass)}>{label}:</div>
            <div>{value}</div>
        </div>
    );
}

LabelWithValue.propTypes = {
    label: PropTypes.string.isRequired,
    labelWidthClass: PropTypes.string,
    showBackgrounds: PropTypes.bool,
    value: PropTypes.any,
};

LabelWithValue.defaultProps = {
    labelWidthClass: 'w-40',
    showBackgrounds: true,
};

export default LabelWithValue;