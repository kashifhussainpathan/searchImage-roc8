import { FormInput } from "@components";
import { Button } from "@components/@ui";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { supabase } from "../../Supabase";
import { signInInputs } from "../../constants/authConstants";

const SignIn = () => {
  const [values, setValues] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  const logIn = async (email: string, password: string) => {
    try {
      setIsRegistering(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      setError(error?.message);
      console.log({ data, error });
    } catch (error) {
      console.log(error);
    } finally {
      setIsRegistering(false);
    }
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    logIn(values.email, values.password);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="bg-gray-100 py-4 flex justify-between items-center px-4">
        <p className="font-medium text-lg">Login</p>
      </div>
      <form className="flex flex-col items-center px-6 py-4">
        {signInInputs?.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name as keyof typeof values] || ""}
            onChange={onChange}
          />
        ))}

        <Button
          onClick={handleSubmit}
          classes="border-2 !border-gray-600 p-2 my-4 w-full"
        >
          {isRegistering ? "Loging in.." : "Login"}
        </Button>

        {error && <p className=" text-red-500 text-center w-full">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
