import { Button } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FormItem } from "../components/FormItem";
import { TextField } from "../components/TextField";
import { useForm } from "react-hook-form";
import type { RegisterRequest } from "../types/auth";
import { toast } from "react-hot-toast";
export const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: { errors, isSubmitted },
    clearErrors,
  } = useForm<RegisterRequest>();

  const handleSubmit = async (data: RegisterRequest) => {
    const res = await register({
      username: data.username,
      email: data.email,
      password: data.password,
    });
    if (res.status === 201) {
      toast.success(res.data.message, {
        duration: 3000,
      });
      navigate("/login");
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
          Register your account
        </h1>
        <form
          onSubmit={handleSubmitForm(handleSubmit)}
          className="flex flex-col gap-4 w-full max-w-md mx-auto"
        >
          <FormItem
            label="Username"
            error={isSubmitted ? errors.username?.message : undefined}
          >
            <TextField<RegisterRequest>
              name="username"
              type="text"
              register={registerForm}
              placeholder="Username"
              validation={{
                required: "Username is required",
                minLength: {
                  value: 4,
                  message: "Username must be at least 4 characters",
                },
              }}
              onChange={() => {
                clearErrors("username");
              }}
            />
          </FormItem>

          <FormItem
            label="Email"
            error={isSubmitted ? errors.email?.message : undefined}
          >
            <TextField<RegisterRequest>
              name="email"
              type="text"
              register={registerForm}
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
            <TextField<RegisterRequest>
              name="password"
              type="password"
              register={registerForm}
              placeholder="Password"
              validation={{
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/,
                  message:
                    "Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, and one number",
                },
              }}
              onChange={() => {
                clearErrors("password");
              }}
            />
          </FormItem>
          <div className="flex flex-col gap-2 w-full justify-center items-end">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
};
