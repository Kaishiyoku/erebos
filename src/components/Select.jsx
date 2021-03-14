import PropTypes from 'prop-types';
import clsx from 'clsx';

function Select({name, options, reference, value, onChange, className}) {
    return (
        <select
            name={name}
            id={name}
            ref={reference}
            value={value}
            onChange={onChange}
            className={clsx('rounded outline-none px-3 py-2 shadow border w-full text-gray-700 leading-tight transition-all duration-200 focus:border-blue-300 focus:ring focus:ring-blue-100 focus:ring-opacity-50 dark:text-gray-300 dark:border-gray-600 dark:bg-black dark:bg-opacity-50', className)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
    })),
    value: PropTypes.any,
};

Select.defaultProps = {
    options: [],
};

export default Select;