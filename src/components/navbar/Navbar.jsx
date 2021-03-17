import {Link} from '@reach/router';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import LoggedInContext from '../../LoggedInContext';
import {useContext, useState} from 'react';
import SunIcon from '../../icons/SunIcon';
import MoonIcon from '../../icons/MoonIcon';
import SparklesIcon from '../../icons/SparklesIcon';
import {Collapse} from 'react-collapse';
import {fromEvent} from 'rxjs';
import {debounceTime, map, pairwise, startWith} from 'rxjs/operators';
import {MEDIA_XL_BREAKPOINT} from '../../core/constants';
import clsx from 'clsx';
import LoadingIcon from '../../icons/LoadingIcon';
import AdditionNavbar from './AdditionNavbar';

function Navbar({label, darkMode, toggleDarkModeFn, isGlobalDataLoading}) {
    const [isLoggedIn] = useContext(LoggedInContext);
    const [isNavbarOpened, setIsNavbarOpened] = useState(window.innerWidth >= MEDIA_XL_BREAKPOINT);

    fromEvent(window, 'resize')
        .pipe(
            startWith({currentTarget: window}),
            map((event) => event.currentTarget.window.innerWidth),
            debounceTime(200),
            pairwise()
        )
        .subscribe(([previousData, currentData]) => {
            if (previousData >= MEDIA_XL_BREAKPOINT && currentData < MEDIA_XL_BREAKPOINT) {
                setIsNavbarOpened(false);
            } else if (previousData < MEDIA_XL_BREAKPOINT && currentData >= MEDIA_XL_BREAKPOINT) {
                setIsNavbarOpened(true);
            }
        });

    const darkModeIcons = {
        dark: <MoonIcon/>,
        light: <SunIcon/>,
        os: <SparklesIcon/>,
    };

    const navbarContentClasses = 'flex flex-grow flex-col items-center xl:flex-row xl:justify-between transition-all duration-500 overflow-hidden';

    return (
        <>
            <div className={clsx('bg-white shadow dark:bg-gray-800', {'mb-8': !isLoggedIn})}>
                <div className="container xl:px-6 mx-auto">
                    <div className="xl:flex xl:items-center">
                        <div className="flex justify-between items-center">
                            <div className="text-xl mr-2 ml-6 xl:ml-0 py-5">
                                <Link to="/" className="flex items-center text-gray-700 transition-all duration-200 hover:text-black dark:text-gray-400 dark:hover:text-white">
                                    <LoadingIcon className={clsx({'mr-0 w-0 h-0': !isGlobalDataLoading, 'mr-3 w-5 h-5': isGlobalDataLoading})}/>

                                    {label}
                                </Link>
                            </div>
                            <button
                                onClick={() => setIsNavbarOpened(!isNavbarOpened)}
                                className="xl:hidden py-4 px-6 text-xl transition-all outline-none duration-200 text-gray-500 hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-primary-200 focus:ring-inset"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                            </button>
                        </div>
                        <Collapse isOpened={isNavbarOpened} theme={{collapse: 'ReactCollapse--collapse flex-grow', content: 'ReactCollapse--content'}}>
                            <div className={navbarContentClasses}>
                                <div className="xl:flex w-full xl:w-auto">
                                    <NavbarItem to="/" label="Dashboard" isVisible={isLoggedIn}/>
                                    <NavbarItem to="/systems" label="Systems" isVisible={isLoggedIn}/>
                                    <NavbarItem to="/marketplaces" label="Marketplaces" isVisible={isLoggedIn}/>
                                </div>
                                <div className="xl:flex w-full xl:w-auto">
                                    <NavbarItem to="/ships/market" label="Ship market" isVisible={isLoggedIn}/>
                                    <NavbarItem to="/loans/available" label="Available Loans" isVisible={isLoggedIn}/>
                                    <a
                                        onClick={toggleDarkModeFn}
                                        className="block cursor-pointer block transition-all duration-200 px-4 py-5 text-black xl:border-b-4 border-l-4 xl:border-l-0 border-transparent hover:text-black hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        {darkModeIcons[darkMode]}
                                    </a>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>

            <AdditionNavbar/>
        </>
    );
}

Navbar.propTypes = {
    darkMode: PropTypes.string.isRequired,
    isGlobalDataLoading: PropTypes.bool,
    label: PropTypes.string.isRequired,
    toggleDarkModeFn: PropTypes.func.isRequired,
};

export default Navbar;