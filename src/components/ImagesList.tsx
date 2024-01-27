import { Tag } from "./@ui";
import Modal from "./Modal";
import { useState } from "react";
import { ImageInterface } from "src/pages/SearchResults";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageDetails from "./ImageDetails";

const ImagesList: React.FC<{ images: ImageInterface[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageInterface | null>(
    null
  );

  const handleImageClick = (image: ImageInterface): void => {
    setSelectedImage(image);
  };

  const handleCloseModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <section className="py-12 flex justify-center items-center flex-wrap gap-6">
      {images?.map((image) => {
        const { id, webformatURL, tags } = image;
        return (
          <div
            key={id}
            className="w-[400px] h-[300px] cursor-pointer max-md:w-[300px] max-md:h-[200px]"
            onClick={() => handleImageClick(image)}
          >
            <LazyLoadImage
              alt={webformatURL}
              effect="blur"
              src={webformatURL}
              className="w-[400px] h-[250px] object-cover rounded-md max-md:w-[300px] max-md:h-[150px]"
            />

            <div className="w-full flex justify-start items-center gap-4 my-1">
              {tags?.split(",").map((tag: string) => (
                <Tag key={tag}>{tag?.trim()}</Tag>
              ))}
            </div>
          </div>
        );
      })}

      {selectedImage && (
        <Modal onClose={handleCloseModal}>
          <ImageDetails image={selectedImage} tags={selectedImage.tags} />
        </Modal>
      )}
    </section>
  );
};

export default ImagesList;
