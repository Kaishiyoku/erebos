import PropTypes from 'prop-types';
import noop from '../../core/noop';

function Button(props) {
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
            className="transition-all flex items-center text-left text-blue-600 shadow-md border border-blue-300 bg-white rounded-full transition-all duration-200 px-4 py-2 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none"
        >
            {props.icon}
            {props.label}
        </button>
    );
}

Button.propTypes = {
    disabled: PropTypes.bool,
    icon: PropTypes.element,
    isLoading: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
    disabled: false,
    icon: null,
    isLoading: false,
    onClick: noop,
    type: 'button',
};

export default Button;