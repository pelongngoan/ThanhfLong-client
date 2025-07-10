import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const MainLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <Toaster />
      <Outlet />
    </div>
  );
};
