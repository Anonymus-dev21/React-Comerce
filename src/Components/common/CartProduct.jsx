import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
export const CartProduct = ({
  nombre,
  precio,
  cantidad,
  id,
  sumar,
  restar,
  disabled,
  removeProduct,
}) => {
  return (
    <>
      <div className="CARD__CART flex  bg-brown-800 max-w-full  rounded-[25px] px-10 my-5 mx-10 max-600:mx-1 max-600:max-w-[98%]  py-5 max-600:flex-col">
        <div className="TITLE flex items-center  max-600:flex-col max-600:text-center max-600:w-full">
          <div className="w-[100px] h-[100px] rounded-[25px]">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="imagen"
              className="w-full h-full object-cover object-center rounded-[25px] p-1"
            />
          </div>

          <div className="ml-5 flex flex-col">
            <Link to={`/itemDetail/${id}`}>
              <span className="font-[Poppins] font-bold text-[25px] text-white dark:text-brown-300">
                {nombre}
              </span>
            </Link>

            <span className="font-[Poppins] font-bold text-[19px] text-white ">
              {precio}
            </span>
          </div>
        </div>
        <div className="flex w-[50%] justify-between max-600:w-full">
          <div className=" w-[200px] max-600:w-auto flex justify-center items-center">
            <span className="font-[Poppins] text-lg text-slate-50 font-semibold tracking-wide">
              Total: {Math.floor(precio * cantidad)}$
            </span>
          </div>
          <div className="COUNTER flex items-center justify-end">
            <div className="flex items-center w-full  select-none">
              <div
                className="cursor-pointer bg-yellow-300 py-2 px-2 dark:bg-brown-300 dark:text-slate-900 rounded-lg"
                onClick={() => restar(id, cantidad)}
              >
                <FaMinus />
              </div>
              <div className="font-[Poppins] px-4 text-lg text-white">
                {cantidad}
              </div>

              <div
                className={`${
                  disabled
                    ? "bg-slate-400 cursor-default dark:bg-slate-300 dark:text-slate-900"
                    : "cursor-pointer bg-yellow-300 dark:bg-brown-300 dark:text-slate-900"
                }  py-2 px-2  rounded-lg `}
                onClick={() => sumar(id)}
              >
                <FaPlus />
              </div>
            </div>
          </div>

          <div className="DELETE text-[35px] flex ml-4 items-center justify-end text-rigth cursor-pointer text-white">
            <MdDelete onClick={() => removeProduct(id)} />
          </div>
        </div>
      </div>
    </>
  );
};
