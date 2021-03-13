import PropTypes from 'prop-types';

function PageHeading({label, ...otherProps}) {
    return (
        <div className="text-3xl pb-4" {...otherProps}>{label}</div>
    );
}

PageHeading.propTypes = {
    label: PropTypes.string.isRequired,
};

export default PageHeading;