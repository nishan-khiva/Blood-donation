import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../admincomponent/sidebar";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex relative">

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#7f0210] text-white p-4 flex justify-between items-center z-20">
        <h1 className="text-xl font-bold">Admin Panel</h1>

        {/* Burger Button */}
        <button onClick={() => setOpen(true)} className="text-3xl">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Right Content */}
      <div className="flex-1 bg-gray-100 min-h-screen p-6  mt-14 md:mt-0 ">
        <Outlet />
      </div>

    </div>
  );
};

export default AdminLayout;
