import { useImagesContext } from "@context/ImagesContext";

const useGetImages = () => {
  const { searchValue, handleSetTags, handleSetError, handleSetImages } =
    useImagesContext();

  const handleGetImages = async () => {
    try {
      const search = searchValue !== "" ? searchValue : "nature";

      const response = await fetch(
        `https://pixabay.com/api/?key=28753736-f83c5ffdc102371dc47d67ffe&q=${search}&image_type=photo`,
        { method: "GET" }
      );

      const data = await response.json();
      handleSetImages(data.hits);

      const uniqueTags = data?.hits?.flatMap(({ tags }: { tags: string }) =>
        tags.split(",").map((tag) => tag.trim())
      );
      const uniqueTagsArray = [...new Set(uniqueTags as string[])];
      handleSetTags(uniqueTagsArray);
    } catch (error: any) {
      handleSetError(error.message);
    }
  };

  return { handleGetImages };
};

export default useGetImages;
