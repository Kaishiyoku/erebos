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

function App() {
    const [isLoggedInState, setIsLoggedInState] = useState(!!getAccessToken());

    return (
        <LoggedInContext.Provider value={[isLoggedInState, setIsLoggedInState]}>
            <div className="container px-4 lg:px-20 mx-auto mb-12">
                <Navbar label="SpaceTraders UI" className="mb-8"/>

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
