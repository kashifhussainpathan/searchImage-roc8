import { Button } from "@components/@ui";
import { useNavigate } from "react-router-dom";
import { useImagesContext } from "@context/ImagesContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { handleToggleAuthForm } = useImagesContext();

  const handleShowAuthForm = (value: string) => () => {
    handleToggleAuthForm(value);
  };

  return (
    <nav className="w-[94%] mx-auto h-[70px] rounded-lg p-4 flex justify-between items-center px-12 backdrop-filter backdrop-blur-[8px] bg-opacity-[0.12] bg-gray-50 shadow-innerShadow max-md:px-5 max-md:h-[60px]">
      <h2
        className="text-2xl font-bold cursor-pointer max-md:text-lg"
        onClick={() => navigate("/")}
      >
        Imagica
      </h2>

      <div className="flex items-center justify-center gap-8 max-md:gap-3 font-medium">
        <div
          onClick={handleShowAuthForm("signin")}
          className="cursor-pointer text-lg max-md:text-sm"
        >
          Login
        </div>
        <Button
          onClick={handleShowAuthForm("signup")}
          classes="max-md:!text-xs"
        >
          Create Account
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
