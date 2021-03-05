import {Link} from '@reach/router';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

function Navbar(props) {
    return (
        <div className="bg-white shadow mb-8">
            <div className="container lg:px-20 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="flex justify-between items-center">
                        <div className="text-xl mr-2 ml-2 md:ml-0 py-5">
                            <Link to="/" className="text-white text-gray-700 transition-all duration-200 hover:text-black">
                                {props.label}
                            </Link>
                        </div>
                        <button className="lg:hidden py-4 px-6 text-xl transition-all outline-none duration-200 text-gray-500 hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-primary-200 focus:ring-inset" data-navbar-control="">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                    <div className="flex flex-grow flex-col items-center lg:flex-row lg:justify-between transition-all duration-500 overflow-hidden">
                        <div className="lg:flex w-full lg:w-auto">
                            <NavbarItem to="/dashboard" label="Dashboard"/>
                        </div>
                        <div className="lg:flex w-full lg:w-auto">
                            <NavbarItem to="/logout" label="Logout"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Navbar.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Navbar;