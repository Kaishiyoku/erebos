import PropTypes from 'prop-types';

function Heading({label, ...otherProps}) {
    return (
        <div className="text-3xl pb-4" {...otherProps}>{label}</div>
    );
}

Heading.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Heading;