import type { LoginRequest } from "../types/auth";
import { FormItem } from "../components/FormItem";
import { TextField } from "../components/TextField";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Button } from "../components/Button";
import { useForm } from "react-hook-form";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register: loginForm,
    handleSubmit: handleSubmitForm,
    formState: { errors, isSubmitted },
    clearErrors,
  } = useForm<LoginRequest>();

  const handleSubmit = async (data: LoginRequest) => {
    const res = await login({
      email: data.email,
      password: data.password,
    });
    if (res.status === 200) {
      toast.success(res.data.message, {
        duration: 3000,
      });
      navigate("/home");
    } else {
      toast.error(res.data.message, {
        duration: 3000,
      });
    }
  };

  return (
    <div className="w-full h-3/5 flex justify-center items-start">
      <div className="flex flex-col gap-8 w-full max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Login to your account
        </h1>
        <form
          onSubmit={handleSubmitForm(handleSubmit)}
          className="flex flex-col gap-4 w-full max-w-md mx-auto"
        >
          <FormItem
            label="Email"
            error={isSubmitted ? errors.email?.message : undefined}
          >
            <TextField<LoginRequest>
              name="email"
              type="text"
              register={loginForm}
              placeholder="Email"
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Email is not valid",
                },
              }}
              onChange={() => {
                clearErrors("email");
              }}
            />
          </FormItem>

          <FormItem
            label="Password"
            error={isSubmitted ? errors.password?.message : undefined}
          >
            <TextField<LoginRequest>
              name="password"
              type="password"
              register={loginForm}
              placeholder="Password"
              validation={{
                required: "Password is required",
              }}
              onChange={() => {
                clearErrors("password");
              }}
            />
          </FormItem>
          <div className="flex flex-col gap-2 w-full justify-center items-end">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};
