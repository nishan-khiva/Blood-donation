import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/adminlogin");
  };

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 h-full  md:hidden z-20"
        ></div>
      )}

      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-[#7f0210] text-white flex flex-col p-5 z-30 transform 
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static transition-transform duration-300 h-full
        `}
      >
        {/* Close button only mobile */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={closeMenu}
            className="text-white text-xl mb-4"
          >
            ✖
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

        <ul className="space-y-3 flex-1">
          <li onClick={closeMenu}><Link to="/admin">Dashboard</Link></li>
          <li onClick={closeMenu}><Link to="/admin/slider">Manage Slider</Link></li>
          <li onClick={closeMenu}><Link to="/admin/requests">Blood Requests</Link></li>
          <li onClick={closeMenu}><Link to="/admin/approvals">Approvals</Link></li>
          <li onClick={closeMenu}><Link to="/admin/events">Events</Link></li>
        </ul>

        {/* Logout Button */}
        <button
          onClick={() => {
            handleLogout();
            closeMenu();
          }}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-all"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
