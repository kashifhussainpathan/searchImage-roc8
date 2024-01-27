import { FC, useState } from "react";
import { ImageInterface } from "src/pages/SearchResults";

interface Options {
  option: string;
  size: string;
}

const Download: FC<{ image: ImageInterface }> = ({ image }) => {
  const downloadOptions: Options[] = [
    { option: "Small", size: "640x960" },
    { option: "Medium", size: "1920x2660" },
    { option: "Big", size: "2400x3600" },
    { option: "Original", size: "3850x5640" },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("Small");

  const handleDownloadClick = () => {
    let modifiedImageUrl = image?.webformatURL;
    switch (selectedOption) {
      case "Small":
        modifiedImageUrl = image?.webformatURL;
        break;
      case "Medium":
        modifiedImageUrl = image?.fullHDURL;
        break;
      case "Big":
        modifiedImageUrl = image?.largeImageURL;
        break;
      case "Original":
        modifiedImageUrl = image?.imageURL;
        break;
    }

    console.log({ image });
    console.log(modifiedImageUrl);

    fetch(modifiedImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);

        // Create a temporary anchor element
        const downloadLink = document.createElement("a");

        // Set the href attribute to the Blob URL
        downloadLink.href = blobUrl;

        // Set the download attribute with a filename
        downloadLink.download = `image_${selectedOption.toLowerCase()}.jpg`;

        // Append the anchor element to the document body
        document.body.appendChild(downloadLink);

        downloadLink.click();

        // Remove the anchor element from the document body
        document.body.removeChild(downloadLink);

        // Revoke the Blob URL to free up resources
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  return (
    <section className="max-xl:flex max-xl:flex-wrap max-xl:justify-between max-xl:gap-2 ">
      {downloadOptions.map(({ option, size }) => {
        return (
          <div
            key={option}
            className={`flex justify-between items-center border rounded py-2 px-4 max-xl:gap-4 max-xl:min-w-[200px] ${
              option === selectedOption && "bg-gray-100"
            }`}
          >
            <p className="text-sm">{option}</p>

            <div className="flex justify-start items-center gap-10 max-xl:gap-3">
              <p className="font-semibold text-sm">{size}</p>

              <div className="inline-flex items-center ">
                <label
                  className="relative flex items-center rounded-full cursor-pointer"
                  htmlFor="customStyle"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-4 w-4 max-xl:h-[14px] max-xl:w-[14px] cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 max-xl:before:h-10 max-xl:before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#4BC34B] checked:bg-[#4BC34B] checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
                    id="customStyle"
                    checked={option === selectedOption}
                    onChange={() => setSelectedOption(option)}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>
          </div>
        );
      })}

      <button
        className="w-full bg-[#4BC34B] text-sm font-medium text-white p-2 mt-6 rounded-md max-xl:mt-2 max-lg:w-auto"
        onClick={handleDownloadClick}
      >
        Download for free!
      </button>
    </section>
  );
};

export default Download;
