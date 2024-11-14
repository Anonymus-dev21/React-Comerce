import { AcordeonContainer } from "../../common/Acordeon/AcordeonContainer";

export const AboutUs = () => {
  return (
    <>
      <h3 className="text-5xl text-center my-5 font-bold font-[Poppins] text-brown-900 dark:text-purple-500">
        Porque elegirnos?
      </h3>
      <div className="CONTAINER flex flex-col items-center">
        <AcordeonContainer
          titulo={"Diversidad de Títulos"}
          desc={
            "Ofrecemos una amplia gama de géneros y categorías que se adaptan a todos los gustos. Desde clásicos de la literatura hasta los lanzamientos más recientes, nuestro catálogo está cuidadosamente seleccionado para satisfacer a todo tipo de lectores."
          }
        />
        <AcordeonContainer
          titulo={"Precios Competitivos"}
          desc={
            "Nos esforzamos por ofrecer precios accesibles sin comprometer la calidad. Gracias a nuestras alianzas con editoriales y distribuidores, puedes adquirir tus libros favoritos a precios competitivos."
          }
        />

        <AcordeonContainer
          titulo={"Facilidad de Compra y Pago Seguro"}
          desc={
            "Nuestra plataforma es fácil de usar y brinda opciones de pago seguras y variadas, para que disfrutes de una experiencia de compra sin complicaciones. Tu información estará siempre protegida gracias a nuestras medidas de seguridad avanzadas."
          }
        />

        <AcordeonContainer
          titulo={"Atención al Cliente de Primera"}
          desc={
            "Valoramos a nuestros clientes y nos dedicamos a ofrecer una experiencia de compra satisfactoria. Nuestro equipo de atención al cliente está siempre disponible para resolver cualquier duda o consulta, asegurando tu satisfacción en cada compra."
          }
        />
      </div>
    </>
  );
};
