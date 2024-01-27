import { useFirstLetterCapital } from "@hooks";
import { useImagesContext } from "../../context/ImagesContext";

const Tab = ({ children }: { children: string }) => {
  const { handleChangeValue } = useImagesContext();

  const handleTabClick = () => {
    handleChangeValue(children);
  };

  const tab = useFirstLetterCapital(children);

  return (
    <div
      className="border border-gray-200 rounded bg-white text-[#888888] py-2 text-center text-sm font-normal max-w-fit cursor-pointer px-6 text-nowrap max-md:text-xs max-md:px-4 max-md:py-1"
      onClick={handleTabClick}
    >
      {tab}
    </div>
  );
};

export default Tab;
