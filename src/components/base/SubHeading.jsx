import PropTypes from 'prop-types';

function SubHeading({label}) {
    return (
        <div className="text-xl pb-4">{label}</div>
    );
}

SubHeading.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SubHeading;