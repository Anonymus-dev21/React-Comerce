import { CartWidget } from "../../common/Cart-widget";
import { Theme } from "../../common/Theme";
import { NavbarResponsive } from "./NavbarResponsive";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-brown-900 text-white dark:bg-indigo-950 font-[Poppins]">
      <nav className="w-full flex justify-between items-center p-5">
        <div className="logo">
          <span className="text-lg font-medium dark:text-white">
            <Link to={"/"}>LectorComerce</Link>
          </span>
        </div>
        <div>
          <ul className="flex w-full text-white max-800:hidden">
            <div className="flex flex-col group">
              <li className="mx-2 group-hover:text-pink-500 transition-all duration-300">
                <Link>Inicio</Link>
              </li>
              <span className="w-0 mt-[-2px] h-[2px] bg-pink-500 group-hover:w-full transition-all duration-200"></span>
            </div>
            <div className="flex flex-col group">
              <li className="mx-2 group-hover:text-pink-500 transition-all duration-300">
                <Link to="/"> Productos</Link>
              </li>
              <span className="w-0 mt-[-2px] h-[2px] bg-pink-500 group-hover:w-full transition-all duration-200"></span>
            </div>
            <div className="flex flex-col group">
              <li className="mx-2 group-hover:text-pink-500 transition-all duration-300">
                Contacto
              </li>
              <span className="w-0 mt-[-2px] h-[2px] bg-pink-500 group-hover:w-full transition-all duration-200"></span>
            </div>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <div className="max-xxsm:mx-3">
            <CartWidget />
          </div>
          <div className="max-xxsm:hidden ">
            <Theme />
          </div>
          <NavbarResponsive />
        </div>
      </nav>
    </header>
  );
};
