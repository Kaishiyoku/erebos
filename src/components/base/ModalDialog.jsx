/* eslint-disable fp/no-mutation */
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import noop from '../../core/noop';

function ModalDialog({isOpen, onAfterOpen, onRequestClose, contentLabel, children}) {
    const handleOnAfterOpen = () => {
        document.querySelector('body').style.overflowY = 'hidden';

        onAfterOpen();
    };

    const handleOnRequestClose = () => {
        document.querySelector('body').style.overflowY = 'inherit';

        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={handleOnAfterOpen}
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
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
};

ModalDialog.defaultProps = {
    onAfterOpen: noop,
};

export default ModalDialog;