import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "active-link" : ""
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "active-link" : ""
                }
            >
                About
            </NavLink>

            <NavLink
                to="/users"
                className={({ isActive }) =>
                    isActive ? "active-link" : ""
                }
            >
                Users
            </NavLink>

        </nav>
    );
}

export default Navbar;