import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (!["/search-weather"].includes(location.pathname)) {
      setShow(true);
    } else {
      setShow(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {show && (
        <nav className="bg-black fixed w-full z-20 top-0 start-0 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex  space-x-1 rtl:space-x-reverse"
            >
              <i className="fa-regular fa-cloud text-2xl bg-gray-800 rounded-full"></i>
              <span className=" text-2xl font-semibold whitespace-nowrap text-gray-300 max-lg:text-xl">
                current-weather
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {/* icon  */}
              <div className="flex md:order-2">
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  className=" text-gray-400 hover:bg-gray-900 rounded-full  me-1"
                >
                  <Link to={"/search-weather"}>
                    <i className="fa-regular fa-magnifying-glass text-2xl"></i>
                  </Link>

                  <span className="sr-only">Search</span>
                </button>
              </div>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={handleClick}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                click
                  ? "items-center justify-between  w-full md:flex md:w-auto md:order-1"
                  : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              }
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-2 gap-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-2 text-white bg-gray-700 text-xl rounded-full"
                    aria-current="page"
                  >
                    home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-2  text-xl rounded-full "
                  >
                    weather
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-2  text-xl rounded-full "
                  >
                    cities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-2  text-xl rounded-full "
                  >
                    map
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-2  text-xl rounded-full "
                  >
                    settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
