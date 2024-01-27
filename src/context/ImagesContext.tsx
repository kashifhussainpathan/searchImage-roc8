import { FC, ReactNode, createContext, useContext, useState } from "react";
import { ImageInterface } from "src/pages/SearchResults";

interface ImagesContextProps {
  tags: string[];
  error: string;
  searchValue: string;
  showAuthForm: string;
  images: ImageInterface[];
  handleSetError: (error: string) => void;
  handleSetTags: (value: string[]) => void;
  handleChangeValue: (value: string) => void;
  handleToggleAuthForm: (value: string) => void;
  handleSetImages: (newImages: ImageInterface[]) => void;
}

export const ImagesContext = createContext<ImagesContextProps | null>(null);

export const useImagesContext = () => {
  const context = useContext(ImagesContext);

  if (!context) {
    throw new Error("ImagesContext not found");
  }

  return context;
};

export const ImagesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<ImageInterface[]>([]);
  const [error, setError] = useState<string | any>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [showAuthForm, setShowAuthForm] = useState<string>("");

  const handleChangeValue = (value: string): void => {
    setSearchValue(value);
  };

  const handleSetTags = (value: string[]): void => {
    setTags(value);
  };

  const handleSetError = (error: string): void => {
    setError(error);
  };

  const handleSetImages = (newImages: ImageInterface[]): void => {
    setImages(newImages);
  };

  const handleToggleAuthForm = (value: string): void => {
    setShowAuthForm(value);
  };

  const value = {
    tags,
    images,
    error,
    searchValue,
    showAuthForm,
    handleSetTags,
    handleSetError,
    handleSetImages,
    handleChangeValue,
    handleToggleAuthForm,
  };
  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
};
