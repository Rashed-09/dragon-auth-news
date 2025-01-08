import { Link, NavLink } from "react-router-dom";
import avatar from "../assets/demo-user.png"
import { useContext } from "react";
import { CreatedContext } from "../AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(CreatedContext);
  const signOuthandlar = () => {
    // signOut or LogOut Promise 
    logOut()
    .then(res => console.log(res.user))
    .catch ( error => console.log(error.message))
  }

    const links = (
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/career"}>Career</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>Register</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full border border-blue-500">
              <img alt="Tailwind CSS Navbar component" src={avatar} />
            </div>
          </div>
          {user ? (
            <button onClick={signOuthandlar} className="btn">Sing Out</button>
          ) : (
            <Link
              className="btn"
              to={"/login"}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;