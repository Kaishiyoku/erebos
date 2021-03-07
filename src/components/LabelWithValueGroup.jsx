import PropTypes from 'prop-types';
import LabelWithValue from './LabelWithValue';

function LabelWithValueGroup(props) {
    return (
        <div className="pb-4">
            {props.entries.map((entry) => <LabelWithValue label={entry.label} value={entry.value} showBackgrounds={props.showBackgrounds}/>)}
        </div>
    );
}

LabelWithValueGroup.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
    })),
    showBackgrounds: PropTypes.bool,
};

LabelWithValueGroup.defaultProps = {
    showBackgrounds: true,
};

export default LabelWithValueGroup;