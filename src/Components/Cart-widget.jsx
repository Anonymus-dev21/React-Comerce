import { FaOpencart } from "react-icons/fa";
export const CartWidget = () => {
  return (
    <div>
      <div className=" relative mr-2">
        <FaOpencart className="text-[30px] mr-2 text-black dark:text-white" />
        <span className="absolute top-[-16px] right-[-20px] px-3 py-[1px] rounded-full bg-indigo-500 text-white font-bold">
          {0}
        </span>
      </div>
    </div>
  );
};
