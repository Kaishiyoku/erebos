import LoadingButton from './LoadingButton';
import PropTypes from 'prop-types';
import {useState} from 'react';

function MultiLoadingButton({promiseFn, ...otherProps}) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);

        promiseFn().finally(() => {
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
    promiseFn: PropTypes.func.isRequired,
};

export default MultiLoadingButton;