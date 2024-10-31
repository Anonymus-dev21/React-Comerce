import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export const Counter = ({
  cantidad,
  sumar,
  restar,
  precioTotal,
  disabled,
  onAdd,
}) => {
  return (
    <>
      <div className="flex items-center w-full mt-16 select-none">
        <div
          className="cursor-pointer bg-yellow-300 py-2 px-2 dark:bg-brown-300 dark:text-slate-900 rounded-lg"
          onClick={restar}
        >
          <FaMinus />
        </div>
        <div className="font-[Poppins] px-4 text-lg">{cantidad}</div>
        <div
          className={`${
            disabled
              ? "bg-slate-400 cursor-default dark:bg-slate-300 dark:text-slate-900"
              : "cursor-pointer bg-yellow-300 dark:bg-brown-300 dark:text-slate-900"
          }  py-2 px-2  rounded-lg `}
          onClick={sumar}
        >
          <FaPlus />
        </div>
      </div>

      <div className="my-6">
        <span className="font-[Poppins] text-lg text-brown-800 dark:text-slate-50 font-semibold tracking-wide ">
          Total: {Math.floor(precioTotal.precio * cantidad)}$
        </span>
      </div>
    </>
  );
};
