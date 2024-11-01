import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CounterContainer } from "../../common/Counter/CounterContainer";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useEffect } from "react";
export const ItemDetail = ({ productDetail, onAdd, cantidad, setCantidad }) => {
  const { stockMax, setStockMax } = useContext(CartContext);

  useEffect(() => {
    setStockMax(false);
  }, [productDetail, setStockMax]);
  return (
    <>
      <div className="w-full h-[100px] relative mb-20">
        <Link to="/">
          <IoArrowBack className="absolute top-10 left-5 text-5xl text-black dark:text-slate-100" />
        </Link>
      </div>

      <div className="w-full min-h-dvh flex flex-col items center">
        <div className="CONTAINERDETAIL w-[80%] m-auto flex justify-center min-h-[500px] max-md:flex-col max-lg:w-[92%] ">
          <div className=" IMAGEN CONTAINER w-[50%] min-h-full max-md:h-[300px] max-md:w-full">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="imagen"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[50%]  TEXTOS py-5 px-7  max-md:w-full max-md:px-0 text-black dark:text-white">
            <h1 className="text-5xl font-[Poppins] tracking-wide  font-semibold text-pretty">
              {productDetail.nombre}
            </h1>
            <p className="text-xl font-[Urbanist] font-medium tracking-wide  mt-5 text-pretty">
              {productDetail.descripcionLarga}
            </p>
            <CounterContainer
              productDetail={productDetail}
              onAdd={onAdd}
              cantidad={cantidad}
              setCantidad={setCantidad}
            />
            {stockMax && (
              <div className="text-red-600 py-2">
                <p className="font-[Poppins] font-bold text-sm">
                  *Ya tienes el stock máximo agregado en el carrito*
                </p>
              </div>
            )}
            <div
              className="py-[6px] px-2  w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer"
              onClick={() => {
                onAdd(cantidad);
              }}
            >
              <span>Agregar al carrito</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
