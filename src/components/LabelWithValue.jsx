import PropTypes from 'prop-types';
import clsx from 'clsx';

function LabelWithValue(props) {
    return (
        <div className={clsx('flex px-2 py-1', {'odd:bg-gray-50': props.showBackgrounds})}>
            <div className="w-40 text-gray-500">{props.label}:</div>
            <div>{props.value}</div>
        </div>
    );
}

LabelWithValue.propTypes = {
    label: PropTypes.string.isRequired,
    showBackgrounds: PropTypes.bool,
    value: PropTypes.any.isRequired,
};

LabelWithValue.defaultProps = {
    showBackgrounds: true,
};

export default LabelWithValue;