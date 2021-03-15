import LoadingButton from './LoadingButton';
import PropTypes from 'prop-types';
import {useState} from 'react';
import noop from '../../../core/noop';

function MultiLoadingButton({promiseFn, onSuccess, onError, ...otherProps}) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);

        promiseFn()
            .then(onSuccess)
            .catch(onError)
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <LoadingButton
            isLoading={isLoading}
            onClick={handleClick}
            {...otherProps}
        />
    );
}

MultiLoadingButton.propTypes = {
    label: PropTypes.string.isRequired,
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
    promiseFn: PropTypes.func.isRequired,
};

MultiLoadingButton.defaultProps = {
    onError: noop,
    onSuccess: noop,
};

export default MultiLoadingButton;