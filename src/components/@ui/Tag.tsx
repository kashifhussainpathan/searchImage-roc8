import { useFirstLetterCapital } from "@hooks";
import { FC } from "react";

const Tag: FC<{ children: string }> = ({ children }) => {
  const tagsArray = children.split(",");
  const tag = tagsArray[1] ? tagsArray[1] : tagsArray[0];
  const capatalisedTag = useFirstLetterCapital(tag);

  return (
    <div className="text-[#666666] bg-gray-100 rounded px-3 py-1 max-md:text-xs">
      {capatalisedTag}
    </div>
  );
};

export default Tag;
