import { CartWidget } from "./Components/Cart-widget";
import { Theme } from "./Components/Theme";

export const Navbar = () => {
  return (
    <header className="bg-slate-100 dark:bg-indigo-950 font-[Poppins]">
      <nav className="w-full flex justify-between items-center p-5">
        <div className="logo">
          <span className="text-lg font-medium text-gray-600 dark:text-white">
            JUGECOMERCE
          </span>
        </div>
        <div>
          <ul className="flex w-full text-gray-600 dark:text-white">
            <li className="mr-2 text-lg font-medium ">Home</li>
            <li className="mr-2 text-lg font-medium"> Productos</li>
            <li className="mr-2 text-lg font-medium">Contacto</li>
          </ul>
        </div>
        <div className="flex items-center">
          <Theme />
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};
