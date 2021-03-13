import PropTypes from 'prop-types';

function PageSubHeading({label}) {
    return (
        <div className="text-xl pb-4">{label}</div>
    );
}

PageSubHeading.propTypes = {
    label: PropTypes.string.isRequired,
};

export default PageSubHeading;