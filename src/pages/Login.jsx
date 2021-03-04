function Login() {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white">
            <div className="font-bold text-xl px-6 py-4">Login</div>

            <div className="px-6 pb-4">
                <div className="mb-4">
                    <label htmlFor="nickname" className="block text-sm font-bold mb-2">Nickname</label>
                    <input type="text" name="nickname" className="rounded outline-none px-3 py-2 shadow border w-full text-gray-700 leading-tight transition-all duration-200 focus:border-blue-300 focus:ring focus:ring-blue-100 focus:ring-opacity-50"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="accessToken" className="block text-sm font-bold mb-2">Access token</label>
                    <input type="password" name="accessToken" className="rounded outline-none px-3 py-2 shadow border w-full text-gray-700 leading-tight transition-all duration-200 focus:border-blue-300 focus:ring focus:ring-blue-100 focus:ring-opacity-50"/>
                </div>

                <button
                    className="text-left text-blue-600 shadow-md border border-blue-300 bg-white rounded-full transition-all duration-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none px-4 py-2"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;