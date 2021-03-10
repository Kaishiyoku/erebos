import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import {Router} from '@reach/router';
import Navbar from './components/navbar/Navbar';
import AvailableLoans from './pages/AvailableLoans';
import AvailableShips from './pages/AvailableShips';
import {ToastContainer} from 'react-toastify';
import LoggedInContext from './LoggedInContext';
import {useState} from 'react';
import getAccessToken from './core/local_storage/getAccessToken';
import {DARK_MODE} from './core/constants';

function App() {
    const [isLoggedInState, setIsLoggedInState] = useState(!!getAccessToken());
    const [darkMode, setDarkMode] = useState(localStorage.getItem(DARK_MODE) || 'os');

    const toggleDarkMode = () => {
        const nextDarkModes = {
            dark: 'light',
            light: 'os',
            os: 'dark',
        };

        const nextDarkMode = nextDarkModes[darkMode];

        if (nextDarkMode === 'light') {
            document.querySelector('html').classList.remove('dark');
        } else if (nextDarkMode === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('html').classList.add('dark');
        }

        localStorage.setItem(DARK_MODE, nextDarkMode);
        setDarkMode(nextDarkMode);
    };

    return (
        <LoggedInContext.Provider value={[isLoggedInState, setIsLoggedInState]}>
            <div className="container px-4 lg:px-20 mx-auto mb-12">
                <Navbar
                    label="SpaceTraders UI"
                    darkMode={darkMode}
                    toggleDarkModeFn={toggleDarkMode}
                    className="mb-8"
                />

                <Router>
                    <Dashboard path="/"/>
                    <AvailableLoans path="/loans/available"/>
                    <AvailableShips path="/ships/available"/>
                    <Login path="/login"/>
                    <Register path="/register"/>
                </Router>

                <ToastContainer/>
            </div>
        </LoggedInContext.Provider>
    );
}

export default App;
