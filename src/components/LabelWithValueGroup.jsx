import PropTypes from 'prop-types';
import LabelWithValue from './LabelWithValue';
import clsx from 'clsx';

function LabelWithValueGroup({entries, showBackgrounds, labelWidthClass, className}) {
    return (
        <div className={clsx('pb-4', className)}>
            {entries.map(({label, value}) => (
                <LabelWithValue
                    key={label}
                    label={label}
                    value={value}
                    labelWidthClass={labelWidthClass}
                    showBackgrounds={showBackgrounds}
                />
            ))}
        </div>
    );
}

LabelWithValueGroup.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any,
    })),
    labelWidthClass: PropTypes.string,
    showBackgrounds: PropTypes.bool,
};

LabelWithValueGroup.defaultProps = {
    showBackgrounds: true,
};

export default LabelWithValueGroup;