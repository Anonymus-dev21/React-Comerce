import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../common/Theme";
export const NavbarResponsive = () => {
  const [hamburgerOpen, setHamburger] = useState(false);
  const toggleNav = () => {
    setHamburger(!hamburgerOpen);
  };
  return (
    <>
      <div className="toggleNavbar" onClick={toggleNav}>
        <RiMenu3Fill className="hidden text-[50px] text-white font-bold  p-2  rounded-full bg-black max-800:flex" />
      </div>

      <div
        className={`backgroundCerrar w-full h-full top-0 right-0 bg-black opacity-60 z-10 ${
          hamburgerOpen ? "fixed" : "hidden"
        }`}
        onClick={toggleNav}
      ></div>
      <div
        className={`fixed top-0  w-[300px]  min-h-[100vh] bg-black dark:bg-violet-950 opacity-100 rounded-s-md transition-all duration-300 z-30 ${
          hamburgerOpen ? "right-0" : "right-[-500px]"
        }`}
      >
        <div className="w-full h-full relative">
          <div className="x hover:cursor-pointer" onClick={toggleNav}>
            <IoCloseCircleOutline
              onClick={toggleNav}
              className={`text-[50px] hover:cursor-pointer text-white font-bold   rounded-full max-800:absolute top-5 left-5 `}
            />
          </div>
        </div>

        <div className="max-xxsm:flex hidden absolute top-5 right-5">
          <Theme />
        </div>
        <ul
          className=" flex flex-col w-full h-full absolute top-16  items-end pr-10 justify-around pb-12 font-[Poppins] text-slate-100 mr-5 text-lg font-semibold tracking-wider"
          onClick={toggleNav}
        >
          <div className="flex flex-col group">
            <li className="mx-2 group-hover:text-pink-500 transition-all duration-300">
              <Link to={"/"}>Inicio</Link>
            </li>
            <span className="w-0 mt-[-2px] h-[2px] bg-pink-500 group-hover:w-full transition-all duration-200"></span>
          </div>

          <div className="flex-col flex group">
            <li className="mt-2 group-hover:text-pink-500 transition-all duration-300">
              <Link to="/productos"> Productos</Link>
            </li>
            <span className="w-0 mt-[-2px] h-[2px] bg-pink-500 group-hover:w-full transition-all duration-200"></span>
          </div>
          <div className="flex-col flex group">
            <li className="mt-2 hover:text-pink-500 transition-all duration-300">
              <Link to={"/contacto"}>Contacto</Link>
            </li>
            <span className="w-0 mt-[-2px] h-[2px] bg-pink-500 group-hover:w-full transition-all duration-200"></span>
          </div>
        </ul>
      </div>
    </>
  );
};
