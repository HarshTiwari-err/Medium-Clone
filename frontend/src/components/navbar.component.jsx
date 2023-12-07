import logo from "../imgs/logo.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="w-[35px] h-[35px] object-contain">
          <img src={logo} alt="leaf" />
        </Link>

        <div className="relative">
          <i className="fi fi-rr-search input-icon"></i>
          <input
            type="text"
            className="input-box rounded-full"
            placeholder="Search"
          />
        </div>

        <div className="flex flex-1 gap-4 justify-end items-center">
          <Link
            to="/editor"
            className="flex cursor-pointer gap-2 items-center opacity-50 mr-4"
          >
            <svg
              className="w-[24px] h-[24px]"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Write"
            >
              <path
                d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                fill="currentColor"
              ></path>
              <path
                d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                stroke="currentColor"
              ></path>
            </svg>
            Write
          </Link>
          <div className="md:flex hidden gap-2 mr-2">
            <Link to="/signup" className="btn-dark">
              Sign up
            </Link>
            <Link to="/signin" className="btn-light">
              Sign in
            </Link>
          </div>
          <div className="border rounded-full cursor-pointer relative">
            <div onClick={() => settoggle((prev) => !prev)}>
              <img
                src="https://miro.medium.com/v2/resize:fill:64:64/1*dmbNkD5D-u45r44go_cf0g.png"
                alt="profile"
                className="w-[45px] h-[45px] rounded-full"
              />
            </div>

            {/* Menu */}
            {toggle && (
              <div className="absolute shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white  w-[264px] rounded-xl  top-[54px] right-[-8px] z-1">
                <div className="w-full px-6 pt-8 pb-6 flex flex-col items-center text-center font-bold">
                  <p className="text-xl ">Get Started on Medium</p>
                  <Link to="/signup" className="btn-dark mt-6 w-full ">
                    Sign Up
                  </Link>
                  <Link to="/signin" className="btn-light mt-4 w-full">
                    Sign In
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
