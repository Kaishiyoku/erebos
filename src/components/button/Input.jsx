import PropTypes from 'prop-types';

function Input(props) {
    return (
        <input
            ref={props.reference}
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            disabled={props.disabled}
            className="rounded outline-none px-3 py-2 shadow border w-full text-gray-700 leading-tight transition-all duration-200 focus:border-blue-300 focus:ring focus:ring-blue-100 focus:ring-opacity-50 dark:text-gray-300 dark:placeholder-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-50"
        />
    );
}

Input.propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    ref: PropTypes.func,
    type: PropTypes.oneOf(['text', 'password']),
};

Input.defaultProps = {
    disabled: false,
    placeholder: null,
    reference: null,
    type: 'text',
};

export default Input;