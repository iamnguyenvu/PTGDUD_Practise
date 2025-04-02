import { useLocation } from "react-router-dom";
import { FaBell, FaQuestionCircle, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/projects": "Projects",
    "/teams": "Teams",
    "/analytics": "Analytics",
    "/messages": "Messages",
    "/integrations": "Integrations",
  };

  const title = pageTitles[location.pathname] || "";

  return (
    <header className="flex justify-between items-center px-6 py-3 border-b border-purple-200 bg-white">
      <h2 className="text-2xl font-bold text-pink-500">{title}</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <span className="absolute top-2.5 left-3 text-gray-400 text-sm">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
        <FaBell className="text-gray-600 cursor-pointer hover:text-pink-500" />
        <FaQuestionCircle className="text-gray-600 cursor-pointer hover:text-pink-500" />
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
        />
      </div>
    </header>
  );
}
