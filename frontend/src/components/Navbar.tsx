import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    // Function to check if the current route matches the link
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="flex gap-5 h-16 w-full px-8 sm:px-6 lg:px-8 items-center bg-burgundy-300">
            <div className="flex items-center">
                <i className="fas fa-dna text-burgundy-900 text-2xl mr-2"></i>
                <span className="text-xl font-bold text-burgundy-900">DermaDetect</span>
            </div>
            <div className="w-full flex justify-baseline gap-5 sm:ml-6 sm:flex sm:space-x-8">
                <Link
                    to="/"
                    className={`${
                        isActive("/") ? "text-burgundy-900 text-xl font-bold" : "text-burgundy-900"
                    } no-underline hover:text-burgundy-900 inline-flex items-center px-1 pt-1 font-medium text-lg`}
                >
                    Home
                </Link>
                <Link
                    to="/how-it-works"
                    className={`${
                        isActive("/how-it-works") ? "text-burgundy-900 text-xl font-bold" : "text-burgundy-900"
                    } no-underline hover:text-burgundy-900 inline-flex items-center px-1 pt-1 font-medium text-lg`}
                >
                    How It Works
                </Link>
                <Link
                    to="/about-skin-cancer"
                    className={`${
                        isActive("/about-skin-cancer") ? "text-burgundy-900 font-bold text-xl " : "text-burgundy-900"
                    } no-underline hover:text-burgundy-900 inline-flex items-center px-1 pt-1 font-medium text-lg`}
                >
                    About Skin Cancer
                </Link>
                <Link
                    to="/find-a-dermatologist"
                    className={`${
                        isActive("/find-a-dermatologist") ? "text-xl text-burgundy-900 font-bold" : "text-burgundy-900"
                    } no-underline hover:text-burgundy-900 inline-flex items-center px-1 pt-1 font-medium text-lg`}
                >
                    Find a Dermatologist
                </Link>
            </div>
        </div>
    );
}

export default Navbar;