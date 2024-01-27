// import { FormEvent, MouseEvent, ReactNode } from "react";

// type ButtonProps = {
//   children: ReactNode;
//   classes?: string;
//   onClick: (
//     event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLInputElement>
//   ) => void;
// };

// const Button = ({ children, onClick, classes }: ButtonProps) => {
//   return (
//     <button
//       className={`unset border-2 border-white px-3 rounded-md font-semibold ${classes}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import { ReactNode, SyntheticEvent } from "react";

type ButtonProps = {
  children: ReactNode;
  classes?: string;
  onClick: (event: SyntheticEvent) => void;
};

const Button = ({ children, onClick, classes }: ButtonProps) => {
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <button
      className={`unset border-2 border-white px-3 rounded-md font-semibold ${classes} text-lg max-md:text-sm max-lg:text-base `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
