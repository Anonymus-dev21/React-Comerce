import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export const Counter = ({ cantidad, sumar, restar, precioTotal }) => {
  return (
    <>
      <div className="flex items-center w-full mt-16 select-none">
        <div
          className="py-2 px-2 cursor-pointer bg-yellow-300 dark:bg-brown-300 dark:text-slate-900 rounded-lg "
          onClick={restar}
        >
          <FaMinus />
        </div>
        <div className="font-[Poppins] px-4 text-lg">{cantidad}</div>
        <div
          className="p-2 cursor-pointer bg-yellow-300 dark:bg-brown-300 dark:text-slate-900 rounded-lg "
          onClick={sumar}
        >
          <FaPlus />
        </div>
      </div>

      <div className="my-6">
        <span className="font-[Poppins] text-lg text-brown-800 font-semibold tracking-wide ">
          Total: {Math.floor(precioTotal.precio * cantidad)}$
        </span>
      </div>

      <div className="py-[6px] px-2  w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer">
        <span>Agregar al carrito</span>
      </div>
    </>
  );
};
