import { Link, useLocation } from "react-router-dom";
import {
  FaChartBar,
  FaProjectDiagram,
  FaUsers,
  FaCommentDots,
  FaCogs,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import available from "../assets/available.png";

const menu = [
  { path: "/", label: "Dashboard", icon: <FaChartBar /> },
  { path: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
  { path: "/teams", label: "Teams", icon: <FaUsers /> },
  { path: "/analytics", label: "Analytics", icon: <FaChartBar /> },
  { path: "/messages", label: "Messages", icon: <HiOutlineMail /> },
  { path: "/integrations", label: "Integrations", icon: <FaCogs /> },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 bg-white shadow-md h-full-screen p-4">
      <div className="flex items-center space-x-2 mb-6">
        <img src={logo} alt="Logo" className="w-24 h-10" />
        <span className="text-2xl font-bold">Chefify</span>
      </div>
      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center space-x-2 p-2 rounded hover:bg-pink-100 ${
                pathname === item.path
                  ? "bg-pink-500 text-white"
                  : "text-gray-700"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <footer className="p-4 text-black bg-blue-50 flex flex-col items-center justify-around gap-4">
        <img src={available} alt="" />
        <h2 className="text-2xl text-center font-bold">V2.0 is available</h2>
        <button
          className="border border-blue-500 text-blue-500 text-center rounded-2xl min-w-full"
          style={{ backgroundColor: "white", border: "1px solid #3B82F6" }}
        >
          Try now
        </button>
      </footer>
    </aside>
  );
}
