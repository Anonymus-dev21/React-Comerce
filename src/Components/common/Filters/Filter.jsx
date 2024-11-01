import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
export const Filter = ({ priceTarget, precios, categoria }) => {
  return (
    <>
      <div className="CONTAINER__FILTERS w-full  flex text-gray-900 dark:text-white">
        <div className="FILTROS flex max-sm:flex-col items-center max-sm:items-start">
          <span className="m-5 max-sm:ml-3 max-sm:my-5 font-[Poppins] font-medium max-sm:text-left">
            {" "}
            Filtrar por:
          </span>
          <div>
            <div className="dropdown group max-sm:ml-3">
              <div className="flex ">
                {categoria ? (
                  <button className="font-[Poppins] font-medium">
                    <span className="mr-1">Categorias:</span> {categoria}
                  </button>
                ) : (
                  <button className="font-[Poppins] font-medium">
                    Categorias
                  </button>
                )}
                <IoIosArrowDown className="text-[20px] block group-hover:hidden transition-all duration-600" />
                <IoIosArrowUp className="hidden text-[20px] group-hover:block transition-all duration-600" />
              </div>

              <div className="dropdown-content">
                <Link to="/">
                  <div className="options">Todos</div>
                </Link>
                <Link to="/category/Fantasía">
                  <div className="options">Fantasía</div>
                </Link>

                <Link to="/category/Ficción">
                  <div className="options">Ficción</div>
                </Link>

                <Link to="/category/Romance">
                  <div className="options">Romance</div>
                </Link>

                <Link to="/category/Distopía">
                  <div className="options">Distopía</div>
                </Link>

                <Link to="/category/Realismo Mágico">
                  <div className="options">Realismo Mágico</div>
                </Link>

                <Link to="/category/Clásico">
                  <div className="options">Clásico</div>
                </Link>

                <Link to="/category/Histórico">
                  <div className="options">Histórico</div>
                </Link>
              </div>
            </div>
            <div className="dropdown group">
              <div className="flex mx-5">
                {precios !== "Todos" ? (
                  <button className="font-[Poppins] font-medium">
                    Precios: {precios}
                  </button>
                ) : (
                  <button className="font-[Poppins] font-medium">
                    Precios:
                  </button>
                )}

                <IoIosArrowDown className="text-[20px] block group-hover:hidden transition-all duration-600" />
                <IoIosArrowUp className="hidden text-[20px] group-hover:block transition-all duration-600" />
              </div>

              <div className="dropdown-content">
                <div className="options" onClick={(e) => priceTarget(e)}>
                  Todos
                </div>
                <div className="options" onClick={(e) => priceTarget(e)}>
                  10 - 30$
                </div>
                <div className="options" onClick={(e) => priceTarget(e)}>
                  30 - 50$
                </div>
                <div className="options" onClick={(e) => priceTarget(e)}>
                  +50$
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
