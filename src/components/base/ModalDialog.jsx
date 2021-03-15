/* eslint-disable fp/no-mutation */
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import noop from '../../core/noop';

function ModalDialog({isOpen, onAfterOpen, onAfterClose, onRequestClose, contentLabel, children}) {
    const handleOnAfterOpen = () => {
        document.querySelector('body').style.overflowY = 'hidden';

        onAfterOpen();
    };

    const handleOnAfterClose = () => {
        document.querySelector('body').style.overflowY = 'inherit';

        onAfterClose();
    };

    const handleOnRequestClose = () => {
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={handleOnAfterOpen}
            onAfterClose={handleOnAfterClose}
            onRequestClose={handleOnRequestClose}

            contentLabel={contentLabel}
            closeTimeoutMS={500}
        >
            {children}
        </Modal>
    );
}

ModalDialog.propTypes = {
    children: PropTypes.node.isRequired,
    contentLabel: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onAfterClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
};

ModalDialog.defaultProps = {
    onAfterClose: noop,
    onAfterOpen: noop,
};

export default ModalDialog;