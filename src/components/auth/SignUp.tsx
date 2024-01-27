import { ChangeEvent, SyntheticEvent, useState } from "react";
import { FormInput } from "@components";
import { Button } from "@components/@ui";
import { supabase } from "../../Supabase";
import { signUnInputs } from "../../constants/authConstants";

const SignUp = () => {
  const [values, setValues] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

  const signUp = async () => {
    try {
      const { email, password } = values;

      setIsSigningUp(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      console.log({ data, error });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSigningUp(false);
    }
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    signUp();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dynamicInputs = signUnInputs?.map((input) => {
    if (input.name === "confirmPassword") {
      return {
        ...input,
        pattern: values.password,
      };
    }
    return input;
  });

  return (
    <div>
      <div className="bg-gray-100 py-4 flex justify-between items-center px-4">
        <p className="font-medium text-lg">Create Account</p>
      </div>
      <form className="flex flex-col items-center px-6 py-4">
        {dynamicInputs?.map((input) => (
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
          {isSigningUp ? "Creating.." : "Create Account"}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
