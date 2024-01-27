import { useFirstLetterCapital } from "@hooks";
import { FC } from "react";

const Info: FC<{ infoName: string; infoDetail: string | number }> = ({
  infoName,
  infoDetail,
}) => {
  const detail =
    typeof infoDetail === "string"
      ? useFirstLetterCapital(infoDetail)
      : infoDetail;

  return (
    <div>
      <p className="text-gray-400 text-sm font-semibold">{infoName}</p>
      <p className="text-md font-semibold">{detail}</p>
    </div>
  );
};

export default Info;
