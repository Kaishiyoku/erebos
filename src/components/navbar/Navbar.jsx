import {Link, navigate} from '@reach/router';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import LoggedInContext from '../../LoggedInContext';
import {useContext, useState} from 'react';
import logout from '../../core/local_storage/logout';
import SunIcon from '../../icons/SunIcon';
import MoonIcon from '../../icons/MoonIcon';
import SparklesIcon from '../../icons/SparklesIcon';
import {Collapse} from 'react-collapse';
import {fromEvent} from 'rxjs';
import {debounceTime, map, pairwise, startWith} from 'rxjs/operators';
import {MEDIA_LG_BREAKPOINT} from '../../core/constants';

function Navbar(props) {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const [isNavbarOpened, setIsNavbarOpened] = useState(window.innerWidth >= MEDIA_LG_BREAKPOINT);

    fromEvent(window, 'resize')
        .pipe(
            startWith({currentTarget: window}),
            map((event) => event.currentTarget.window.innerWidth),
            debounceTime(200),
            pairwise()
        )
        .subscribe(([previousData, currentData]) => {
            if (previousData >= MEDIA_LG_BREAKPOINT && currentData < MEDIA_LG_BREAKPOINT) {
                setIsNavbarOpened(false);
            } else if (previousData < MEDIA_LG_BREAKPOINT && currentData >= MEDIA_LG_BREAKPOINT) {
                setIsNavbarOpened(true);
            }
        });

    const handleLogout = () => {
        logout();

        navigate('/', {replace: true}).then(() => {
            setIsLoggedIn(false);
        });
    };

    const logoutButton = isLoggedIn ? (
        <a
            onClick={handleLogout}
            className="block cursor-pointer block transition-all duration-200 px-4 py-5 text-black lg:border-b-4 border-l-4 lg:border-l-0 border-transparent hover:text-black hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
        >
            Logout
        </a>
    ) : null;

    const darkModeIcons = {
        dark: <MoonIcon/>,
        light: <SunIcon/>,
        os: <SparklesIcon/>,
    };

    const navbarContentClasses = 'flex flex-grow flex-col items-center lg:flex-row lg:justify-between transition-all duration-500 overflow-hidden';

    return (
        <div className="bg-white shadow mb-8 dark:bg-gray-800">
            <div className="container lg:px-20 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="flex justify-between items-center">
                        <div className="text-xl mr-2 ml-2 md:ml-0 py-5">
                            <Link to="/" className="text-gray-700 transition-all duration-200 hover:text-black dark:text-gray-400 dark:hover:text-white">
                                {props.label}
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsNavbarOpened(!isNavbarOpened)}
                            className="lg:hidden py-4 px-6 text-xl transition-all outline-none duration-200 text-gray-500 hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-primary-200 focus:ring-inset"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                        </button>
                    </div>
                    <Collapse isOpened={isNavbarOpened} theme={{collapse: 'ReactCollapse--collapse flex-grow', content: 'ReactCollapse--content'}}>
                        <div className={navbarContentClasses}>
                            <div className="lg:flex w-full lg:w-auto">
                                <NavbarItem to="/" label="Dashboard" isVisible={isLoggedIn}/>
                            </div>
                            <div className="lg:flex w-full lg:w-auto">
                                <NavbarItem to="/ships/available" label="Ship market" isVisible={isLoggedIn}/>
                                <NavbarItem to="/loans/available" label="Available Loans" isVisible={isLoggedIn}/>
                                {logoutButton}
                                <a
                                    onClick={props.toggleDarkModeFn}
                                    className="block cursor-pointer block transition-all duration-200 px-4 py-5 text-black lg:border-b-4 border-l-4 lg:border-l-0 border-transparent hover:text-black hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    {darkModeIcons[props.darkMode]}
                                </a>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

Navbar.propTypes = {
    darkMode: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    toggleDarkModeFn: PropTypes.func.isRequired,
};

export default Navbar;