import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex gap-5 h-16 w-full px-8 sm:px-6 lg:px-8 items-center">
            <div className="flex items-center">
                <i className="fas fa-dna text-indigo-600 text-2xl mr-2"></i>
                <span className="text-xl font-bold text-gray-900">
                    DermaDetect
                </span>
            </div>
            <div className="w-full flex justify-baseline gap-5 sm:ml-6 sm:flex sm:space-x-8">
                <Link
                    to="/"
                    className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                >
                    Home Page
                </Link>
                <Link
                    to="/how-it-works"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                >
                    How It Works
                </Link>
                <Link
                    to="/about-skin-cancer"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                >
                    About Skin Cancer
                </Link>
                <Link
                    to="/find-a-dermatologist"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                >
                    Find a Dermatologist
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
