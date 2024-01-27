import { FC } from "react";

import Download from "./Download";
import { Info, Tag } from "./@ui";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ImageInterface } from "src/pages/SearchResults";

interface ImageDetailsProps {
  image: ImageInterface;
  tags: string;
}

const ImageDetails: FC<ImageDetailsProps> = ({ image, tags }) => {
  return (
    <>
      {/* Modal Header */}
      <div className="bg-gray-100 py-4 flex justify-between items-center px-4 ">
        <p className="font-medium text-lg">Preview ID: 48777</p>
      </div>

      {/* Image Preview and details */}
      <div className="flex items-start gap-10 p-8 max-xl:flex-col max-xl:gap-4 max-md:px-4 max-md:py-2">
        {/* Image and tags */}
        <div className="w-[75%] max-xl:w-full">
          <LazyLoadImage
            alt={image?.largeImageURL}
            src={image?.largeImageURL}
            className="w-full h-[450px] max-xl:h-[300px] object-cover rounded-lg max-lg:h-[250px] max-md:h-[200px]"
          />

          {/* Tags */}
          <div className="w-full flex justify-start items-center gap-3 mt-8 max-xl:mt-2">
            <p className="font-bold">Tags:</p>
            {tags?.split(",").map((tag: string) => (
              <Tag key={tag}>{tag?.trim()}</Tag>
            ))}
          </div>
        </div>

        {/* Image details */}
        <div className="w-[25%] flex flex-col max-xl:flex-row max-xl:w-full max-xl:justify-between max-xl:gap-4">
          <div className="mb-6 max-xl:w-[70%] max-xl:mb-0">
            <p className="font-medium text-lg mb-4">Download</p>
            <Download image={image} />
          </div>

          <div className="max-xl:w-auto">
            <p className="font-medium text-lg mb-4">Information</p>

            <div className="grid grid-cols-3 justify-between gap-10 max-xl:gap-8 max-md:grid-cols-1 max-md:gap-2">
              <Info infoName="User" infoDetail={image.user}></Info>
              <Info infoName="User ID" infoDetail={image?.user_id}></Info>
              <Info infoName="Type" infoDetail={image?.type}></Info>
              <Info infoName="Views" infoDetail={image?.views}></Info>
              <Info infoName="Downloads" infoDetail={image?.downloads}></Info>
              <Info infoName="Likes" infoDetail={image?.likes}></Info>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageDetails;
