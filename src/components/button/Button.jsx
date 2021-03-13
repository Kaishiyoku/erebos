import PropTypes from 'prop-types';
import noop from '../../core/noop';
import clsx from 'clsx';

function Button(props) {
    const baseButtonClasses = 'flex items-center text-left text-blue-600 shadow-md border border-blue-300 bg-white rounded-full transition-all duration-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none dark:text-blue-400 dark:border-blue-500 dark:bg-black dark:bg-opacity-50 dark:hover:text-white dark:hover:border-blue-400 dark:hover:bg-blue-500';

    const buttonClasses = clsx(baseButtonClasses, {'flex gap-1 items-center': props.icon}, {
        'px-1': !props.label && props.size === 'sm',
        'px-2': (props.label && props.size === 'sm') || (!props.label && ['base', 'lg'].includes(props.size)),
        'px-4': props.label && ['base', 'lg'].includes(props.size),
        'py-1 text-sm': props.size === 'sm',
        'py-2': props.size === 'base',
        'py-2 text-lg': props.size === 'lg',
    });

    return (
        <button
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
            className={buttonClasses}
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
    label: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['base', 'sm', 'lg']),
    type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
    disabled: false,
    icon: null,
    isLoading: false,
    onClick: noop,
    size: 'base',
    type: 'button',
};

export default Button;