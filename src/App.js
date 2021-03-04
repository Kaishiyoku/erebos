import isLoggedIn from './core/local_storage/isLoggedIn';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import {Router} from '@reach/router';

function App() {
    const Home = isLoggedIn() ? Dashboard : Login;

    return (
        <div className="container mt-8 px-4 lg:px-20 mx-auto">
            <Router>
                <Home path="/"/>
                <Dashboard path="/dashboard"/>
                <Login path="/login"/>
                <Register path="/register"/>
            </Router>
        </div>
    );
}

export default App;
