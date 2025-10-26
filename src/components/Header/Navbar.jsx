
import Container from "../Container/Container";
import wbLogo from "../../assets/food_api_logo.png";
import { Link, NavLink } from "react-router";
import { FaCartPlus } from "react-icons/fa";



const menuItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "menu", label: "Our Menu", path: "/menu" },
  { id: "about", label: "About Us", path: "/about" },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#DCD6D9] via-[#DC5F3F] to-[#D8B8B1] shadow-lg">
      <Container>
        <div className="navbar">
          {/* Left Side: Logo */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-amber-100 font-semibold rounded-box items-center z-10 mt-3 w-70 h-30 p-2 shadow text-amber-700 cursor-pointer"
              >
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="text-lg flex items-center gap-2">
              <img src={wbLogo} alt="Logo" className="w-[35px] h-[35px]" />
              <span className="bg-gradient-to-br from-green-700 to-amber-700 bg-clip-text text-transparent font-bold text-xl">
                FreshBite
              </span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex justify-between items-center space-x-3 px-1 text-white text-sm font-semibold cursor-pointer">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "pb-1 border-b-2 border-b-amber-800" : ""
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Search, Cart, Sign In */}
          <div className="navbar-end cursor-pointer flex items-center space-x-3 ">
            

            <div>
              {/* Always show cart count, even if 0 */}
              <Link to="/cart">
                <FaCartPlus size={20} color="#ed6002" strokeWidth={1.25} />
              </Link>
            </div>

            <button className="ml-3 btn btn-soft btn-warning rounded-full text-amber-800">
              Sign In
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
