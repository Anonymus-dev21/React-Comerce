import { FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-brown-800 text-slate-50">
      <div className="footer__content ">
        <div className="enlaces__top">
          <div className="title text-center w-full ">
            <h3 className="text-2xl font-bold font-[Poppins] py-6">
              Secciones de interes
            </h3>
          </div>

          <div className="enlaces flex justify-center space-x-20 text-center  font-semibold font-[Poppins] tracking-wide max-sm:flex-wrap max-xxsm:space-x-10">
            <Link to="/" className="hover:underline">
              Inicio
            </Link>

            <Link to="/contacto" className="hover:underline">
              Contacto
            </Link>

            <Link to="/productos" className="hover:underline">
              Productos
            </Link>
          </div>
        </div>
        <div className="enlaces__content flex max-800:flex-col max-800:items-center max-800:space-y-10 justify-around my-8">
          <div className="contactanos">
            <div className="title">
              <span className="resaltado__title font-semibold font-[Poppins]">
                Contactanos
              </span>
            </div>
            <div className="telefono__horario ">
              <p className="my-3">
                <span className="resaltado font-medium font-[Poppins] text-brown-200">
                  Telefono:{" "}
                </span>
                3487152346
              </p>
              <p>
                <span className="resaltado font-medium font-[Poppins] text-brown-200">
                  Horarios:{" "}
                </span>
                Lunes a Sabados, 10:00 - 19:00
              </p>
            </div>
            <div className="redes__sociales flex font-medium my-3">
              <a
                href="https://www.instagram.com/osky_cabral/"
                target="_blank"
                className="mr-5  hover:text-lg transition-all duration-500"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="mr-5  hover:text-lg transition-all duration-500"
              >
                <FaTiktok />
              </a>
              <a
                href="#"
                className="mr-5  hover:text-lg transition-all duration-500"
              >
                <FaPinterest />
              </a>
              <a
                href="#"
                className="mr-5  hover:text-lg transition-all duration-500"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/cabral-oscar/"
                target="_blank"
                className="mr-5  hover:text-lg transition-all duration-500"
              >
                <CiLinkedin />
              </a>
            </div>
          </div>
          <div className="cuenta max-800:flex-col max-800:flex max-800:items-left max-800:w-[300px]">
            <span className="resaltado__title cuenta__title font-semibold font-[Poppins]">
              Tu cuenta:{" "}
            </span>
            <div className="caja">
              <a href="#" className="hover:underline">
                Iniciar sesión
              </a>
            </div>
            <div className="caja">
              <Link to="/CartSection" className="hover:underline">
                Carrito de Compras
              </Link>
            </div>
            <div className="caja">
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </div>
            <div className="caja">
              <a href="#" className="hover:underline">
                Tracking de pedidos
              </a>
            </div>
          </div>

          <div className="metodos_pago">
            <div className="w-full flex max-md:items-center max-md:justify-center">
              <span className="resaltado__title font-[Poppins] font-semibold ">
                Métodos de pago:{" "}
              </span>
            </div>
            <div className="metodos_pago--img flex space-x-5 my-3">
              <div className="box  w-[90px] h-[60px]" id="mp">
                <img
                  src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731464632/mp_zrbr4i.jpg"
                  className="w-full object-cover h-full rounded-md"
                />
              </div>
              <div className="box w-[90px] h-[60px]">
                <img
                  src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731464632/visa_qerqk6.svg"
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="box w-[90px] h-[60px]">
                <img
                  src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731464632/credit-card_ckiekg.svg"
                  className="w-full object-cover h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ALLRIGHTS pb-8">
          <div className="rigths__reserved w-full text-center font-[Poppins] text-lg ">
            <i className="fa-regular fa-copyright"></i>
            <span className="rigths">Todos los derechos reservados</span>
          </div>
          <div className="rigths__osky w-full text-center ">
            <div className="my font-[Poppins] ">
              Made by{" "}
              <a
                href="https://www.linkedin.com/in/cabral-oscar/"
                target="_blank"
                className="hover:underline font-bold tracking-wide"
              >
                Oscar Cabral
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
