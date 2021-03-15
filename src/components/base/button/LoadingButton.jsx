import Button from './Button';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import LoadingIcon from '../../../icons/LoadingIcon';

function LoadingButton({disabled, isLoading, ...otherProps}) {
    return (
        <Button
            icon={<LoadingIcon className={clsx({'mr-0 w-0 h-0': !isLoading, 'mr-3 w-5 h-5': isLoading})}/>}
            disabled={isLoading || disabled}
            {...otherProps}
        />
    );
}

LoadingButton.propTypes = {
    isLoading: PropTypes.bool,
    label: PropTypes.string.isRequired,
};

LoadingButton.defaultProps = {
    isLoading: false,
};

export default LoadingButton;