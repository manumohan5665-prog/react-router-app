import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-slate-900 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-2xl font-bold"
                >
                    ReactApp
                </NavLink>

                {/* Navigation */}
                <div className="flex gap-6">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-400 font-semibold"
                                : "text-gray-300 hover:text-white"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-400 font-semibold"
                                : "text-gray-300 hover:text-white"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/users"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-400 font-semibold"
                                : "text-gray-300 hover:text-white"
                        }
                    >
                        Users
                    </NavLink>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;