import Button from './Button';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function LoadingButton({disabled, isLoading, ...otherProps}) {
    const loadingIcon = (
        <svg
            className={clsx('transition-all animate-spin text-blue-600', {'mr-0 w-0 h-0': !isLoading, 'mr-3 w-5 h-5': isLoading})}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    );

    return (
        <Button {...otherProps} icon={loadingIcon} disabled={isLoading || disabled}/>
    );
}

LoadingButton.propTypes = {
    isLoading: PropTypes.bool,
};

LoadingButton.defaultProps = {
    isLoading: false,
};

export default LoadingButton;