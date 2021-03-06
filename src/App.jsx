import isLoggedIn from './core/local_storage/isLoggedIn';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import {Router} from '@reach/router';
import Navbar from './components/navbar/Navbar';
import Logout from './pages/Logout';
import AvailableLoans from './pages/AvailableLoans';

function App() {
    const Home = isLoggedIn() ? Dashboard : Login;

    return (
        <div className="container px-4 lg:px-20 mx-auto">
            <Navbar label="SpaceTraders UI" className="mb-8"/>

            <Router>
                <Home path="/"/>
                <Dashboard path="/dashboard"/>
                <AvailableLoans path="/loans/available"/>
                <Login path="/login"/>
                <Logout path="/logout"/>
                <Register path="/register"/>
            </Router>
        </div>
    );
}

export default App;
