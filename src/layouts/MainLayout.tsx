import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <Outlet />
    </div>
  );
};
