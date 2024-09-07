export const Banner = ({ name }) => {
  return (
    <div className="banner__container w-full min-h-dvh flex items-center justify-center">
      <div className="banner__content w-[50%] text-center text-black dark:text-white">
        <h1 className="text-5xl font-semibold mb-5 font-[Poppins]">
          Hola {name}!
        </h1>
        <p className="text-xl font-[Urbanist] text-pretty">
          Estamos encantados de tenerte aqui! hechale un vistazo a nuestros
          <span className="underline hover:text-blue-500 ml-1">productos!</span>
        </p>
      </div>
    </div>
  );
};
