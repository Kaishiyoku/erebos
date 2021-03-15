import PropTypes from 'prop-types';

function CardHeading({actionButton, label, subLabel}) {
    if (!actionButton) {
        return (
            <div className="font-bold text-xl px-6 py-4 space-x-2">
                <span>{label}</span>
                <span className="text-lg text-gray-500">{subLabel}</span>

                {actionButton}
            </div>
        );
    }

    return (
        <div className="flex justify-between items-center pb-2">
            <div className="px-6 pt-4 font-bold text-xl pb-2 space-x-2">
                <span>{label}</span>
                <span className="text-lg text-gray-500">{subLabel}</span>
            </div>

            {actionButton}
        </div>
    );
}

CardHeading.propTypes = {
    actionButton: PropTypes.node,
    label: PropTypes.string.isRequired,
    subLabel: PropTypes.string,
};

export default CardHeading;