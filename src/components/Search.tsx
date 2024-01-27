import { FC } from "react";
import { Search } from "lucide-react";
import { Button } from "@components/@ui";
import { useNavigate } from "react-router-dom";
import { useImagesContext } from "../context/ImagesContext";
import { useGetImages } from "@hooks";

interface SearchInputProps {
  searchValue: string;
}

const SearchInput: FC<SearchInputProps> = ({ searchValue }) => {
  const navigate = useNavigate();
  const { handleGetImages } = useGetImages();
  const { handleChangeValue } = useImagesContext();

  const handleSearch = () => {
    if (searchValue === "") {
      return;
    }
    navigate("/results");
    handleGetImages();
  };

  return (
    <div className="h-[70px] backdrop-filter backdrop-blur-[10px] bg-opacity-[0.12] shadow-innerShadow w-[750px] rounded-lg mx-auto flex items-center justify-between px-6 max-md:h-[40px] max-md:w-[280px] max-md:px-4 max-lg:w-[80%] max-lg:h-[60px]">
      <div className="h-full w-full flex items-center justify-between gap-4">
        <div>
          <Search className="max-md:w-4 max-md:h-4 max-lg:w-5 max-lg:h-5" />
        </div>

        <div className="h-[50%] w-[1px] bg-white"></div>

        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleChangeValue(e.target.value)}
          value={searchValue}
          className="w-full bg-transparent border-none py-1 outline-none text-lg max-md:text-base font-semibold"
        />
      </div>

      <Button onClick={handleSearch} classes="max-md:!text-xs">
        GO!
      </Button>
    </div>
  );
};
export default SearchInput;
