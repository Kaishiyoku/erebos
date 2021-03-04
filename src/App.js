import isLoggedIn from './core/local_storage/isLoggedIn';
import Index from './pages/Index';
import Login from './pages/Login';

function App() {
    const Component = isLoggedIn() ? Index : Login;

    return (
        <div className="container mt-8 px-4 lg:px-20 mx-auto">
            <Component/>
        </div>
    );
}

export default App;
