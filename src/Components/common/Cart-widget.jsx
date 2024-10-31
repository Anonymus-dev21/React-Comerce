import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
export const CartWidget = () => {
  const { totalProd } = useContext(CartContext);
  return (
    <Link to="/CartSection">
      <div>
        <div className=" relative mr-2">
          <FaOpencart className="text-[30px] mr-2 text-white" />
          <span className="absolute top-[-16px] right-[-20px] px-3 py-[1px] rounded-full bg-indigo-500 text-white font-bold">
            {totalProd}
          </span>
        </div>
      </div>
    </Link>
  );
};
