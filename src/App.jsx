import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import {Router} from '@reach/router';
import Navbar from './components/navbar/Navbar';
import AvailableLoans from './pages/AvailableLoans';
import ShipMarket from './pages/ShipMarket';
import {ToastContainer} from 'react-toastify';
import Systems from './pages/Systems';
import Modal from 'react-modal';
import preval from 'preval.macro';
import Bottleneck from 'bottleneck';
import ContextContainer from './ContextContainer';

Modal.setAppElement('#root');

if (!window.rateLimiter) {
    // eslint-disable-next-line fp/no-mutation
    window.rateLimiter = new Bottleneck({maxConcurrent: 2, minTime: 500});
}

function App() {
    return (
        <ContextContainer>
            <div className="container px-4 lg:px-20 mx-auto mb-12">
                <Navbar label="Erebos"/>

                <Router primary={false}>
                    <Dashboard path="/"/>
                    <AvailableLoans path="/loans/available"/>
                    <ShipMarket path="/ships/market"/>
                    <Systems path="/systems"/>
                    <Login path="/login"/>
                    <Register path="/register"/>
                </Router>

                <ToastContainer/>

                <div className="text-xs text-gray-400 dark:text-gray-600 mt-12 text-right">
                    Build date: {preval`module.exports = new Date().toUTCString();`}
                </div>
            </div>
        </ContextContainer>
    );
}

export default App;
