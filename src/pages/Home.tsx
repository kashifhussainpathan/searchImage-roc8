import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, SearchInput } from "@components";
import { useImagesContext } from "@context/ImagesContext";

const Home: React.FC = () => {
  const location = useLocation();
  const { searchValue, handleChangeValue, handleSetImages } =
    useImagesContext();

  useEffect(() => {
    handleChangeValue("");
    handleSetImages([]);
  }, [location]);

  return (
    <div className="bg-[url('./assets/background-image.jpeg')] w-full h-screen bg-cover bg-no-repeat bg-bottom pt-10">
      <header className="w-full mx-auto">
        <Navbar />

        <h1 className=" w-full mx-auto font-bold text-6xl max-w-[800px] text-center my-20 max-md:text-3xl max-lg:text-4xl max-lg:w-[60%]">
          Discover over 2,000,000 free Stock Images
        </h1>
      </header>

      {/* search */}
      <SearchInput searchValue={searchValue} />

      {/* suggestions */}
      <div className="h-[40px] backdrop-filter backdrop-blur-[8px] bg-opacity-[0.12] shadow-innerShadow w-[300px] mx-auto rounded-lg my-6 flex justify-center items-center max-md:h-[30px] max-md:w-fit max-md:text-sm max-md:px-4">
        <p>
          <span className="font-semibold"> Trending:</span> flowers, love,
          forest, river
        </p>
      </div>
    </div>
  );
};

export default Home;
