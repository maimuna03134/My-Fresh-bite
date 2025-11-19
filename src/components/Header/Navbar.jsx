
import Container from "../Container/Container";
import wbLogo from "../../assets/food_api_logo.png";
import userImg from "../../assets/user.png";
import { Link } from "react-router";
import { FaCartPlus } from "react-icons/fa";
import MyLink from "../link/MyLink";
import toast from "react-hot-toast";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";




const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    // console.log('user trying to logout')

    logOut()
      .then(() => {
        toast.success("Your Logged Out successful!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
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
                <li>
                  <MyLink to={"/"}>Home</MyLink>
                </li>
                <li>
                  <MyLink to={"/menu"}>Our Menu</MyLink>
                </li>
                <li>
                  <MyLink to={"/about"}>About Us</MyLink>
                </li>
                {user ? (
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left py-1"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/auth/login" className="w-full text-left py-1 ">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="text-lg flex items-center gap-2">
              <img src={wbLogo} alt="Logo" className="w-[40px] h-[35px]" />
              <span className="bg-gradient-to-br from-green-700 to-amber-700 bg-clip-text text-transparent font-bold text-xl">
                FreshBite
              </span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex justify-between items-center space-x-3 px-1 text-white text-sm font-semibold cursor-pointer">
              <li>
                <MyLink to={"/"}>Home</MyLink>
              </li>
              <li>
                <MyLink to={"/menu"}>Our Menu</MyLink>
              </li>
              <li>
                <MyLink to={"/about"}>About Us</MyLink>
              </li>
            </ul>
          </div>

          {/* Right Side: Search, Cart, Sign In */}
          <div className="navbar-end cursor-pointer flex items-center space-x-2 ">
            <div className="mr-4">
              {/* Always show cart count, even if 0 */}
              <Link to="/cart">
                <FaCartPlus size={20} color=" #FFFFFF" strokeWidth={1.25} />
              </Link>
            </div>
            <div className="relative group">
              <img
                src={user?.photoURL || userImg}
                alt=""
                className="w-[35px] rounded-full "
              />

              {user && (
                <span className="absolute left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {user.displayName}
                </span>
              )}
            </div>

            {user ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-style hidden lg:flex items-center justify-center"
                >
                  SignOut
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="btn btn-soft btn-warning rounded-full text-amber-800"
                >
                  SignIn
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
