import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-3/5 flex justify-center items-start">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Welcome ThanhfLong</h1>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Button onClick={() => navigate("/register")}>Register</Button>
        </div>
      </div>
    </div>
  );
};
