import { useEffect } from "react";
import { Tab } from "@components/@ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useImagesContext } from "@context/ImagesContext";
import { ImagesList, Navbar, SearchInput } from "@components";
import { useFirstLetterCapital, useGetImages, useTabsScroll } from "@hooks";

export interface ImageInterface {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

const SearchResults: React.FC = () => {
  const { handleGetImages } = useGetImages();
  const { searchValue, error, images, tags } = useImagesContext();
  const { tabContainerRef, setScrollPosition, handleScroll } = useTabsScroll();

  const searchedValue = useFirstLetterCapital(searchValue);

  useEffect(() => {
    if (!searchValue) {
      handleGetImages();
    }
  }, []);

  useEffect(() => {
    setScrollPosition(0);
  }, [tags]);

  if (error) {
    return <div className="text-red-500 font-medium text-center"> {error}</div>;
  }

  return (
    <section className="bg-[url('./assets/background-image.jpeg')] w-full h-[450px] bg-cover bg-no-repeat bg-top bg-fixed pt-10">
      <Navbar />

      {/* search */}
      <div className="my-20">
        <SearchInput searchValue={searchValue} />
      </div>

      <h2 className="font-bold text-4xl text-center mb-20 mt-[-8px] max-md:text-2xl max-lg:text-3xl">
        Results : {searchedValue}
      </h2>

      {/* Suggestion Tabs */}
      <section className="bg-gray-100 py-6 flex justify-start items-center w-full gap-4 overflow-scroll overflow-x-hidden overflow-y-hidden relative max-md:py-4">
        <div
          className="absolute left-0 top-0 bottom-0 flex items-center"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft className="text-gray-800 cursor-pointer bg-white rounded-md w-8 h-8 max-md:w-6 max-md:h-6" />
        </div>

        <div
          className="w-full flex justify-start items-center gap-3 overflow-hidden px-14 max-md:px-6"
          ref={tabContainerRef}
        >
          {tags?.map((tag: string) => (
            <Tab key={tag}>{tag}</Tab>
          ))}
        </div>

        <div
          className="absolute right-0 top-0 bottom-0 flex items-center cursor-pointer "
          onClick={() => handleScroll("right")}
        >
          <ChevronRight className="text-gray-800 cursor-pointer bg-white rounded-md w-8 h-8 border max-md:w-6 max-md:h-6" />
        </div>
      </section>

      {/* Search Result */}
      <ImagesList images={images} />
    </section>
  );
};

export default SearchResults;
