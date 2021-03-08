import PropTypes from 'prop-types';
import NavLink from '../NavLink';

function NavbarItem(props) {
    return (
        <NavLink to={props.to} className="block cursor-pointer block transition-all duration-200 px-4 py-5 text-black lg:border-b-4 border-l-4 lg:border-l-0 hover:text-black hover:bg-gray-50">
            {props.label}
        </NavLink>
    );
}

NavbarItem.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default NavbarItem;