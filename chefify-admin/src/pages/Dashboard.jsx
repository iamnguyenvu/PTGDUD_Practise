import { useEffect, useState } from "react";
import { FaShoppingCart, FaDollarSign, FaUserPlus, FaFileAlt, FaPen, FaFileImport, FaFileExport, } from "react-icons/fa";
import axios from "axios";

export default function Dashboard() {
  const [cardData, setCardData] = useState([]);
  const [buttonData, setButtonData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  const TitleWithIcon = ({ icon, text }) => (
    <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
      <span className="bg-pink-100 text-pink-500 p-2 rounded-full">{icon}</span>
      {text}
    </h2>
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const respone = await axios.get(
          "https://67d53cb6d2c7857431efc348.mockapi.io/travel-app/api/chefify-admin"
        );
        setData(respone.data);
        setLoading(false);
        console.log(respone.data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }

      setCardData([
        {
          title: "Turnover",
          icon: <FaShoppingCart className="text-pink-400 text-lg" />,
          value: "$92,405",
          change: "▲ 5.39%",
          bg: "bg-pink-50",
        },
        {
          title: "Profit",
          icon: <FaDollarSign className="text-blue-400 text-lg" />,
          value: "$32,218",
          change: "▲ 5.39%",
          bg: "bg-blue-50",
        },
        {
          title: "New customer",
          icon: <FaUserPlus className="text-indigo-400 text-lg" />,
          value: "298",
          change: "▲ 6.84%",
          bg: "bg-indigo-50",
        },
      ]);

      setButtonData([
        {
          title: "Import",
          icon: <FaFileImport className="text-pink-400 text-lg" />,
          bg: "bg-white-50",
        },
        {
          title: "Export",
          icon: <FaFileExport className="text-pink-400 text-lg" />,
          bg: "bg-white-50",
        },
      ]);
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const generatePaginationNumber = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  if (data.length === 0) {
    return <div className="text-center text-gray-500">No data available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Overview */}
      <section>
        <TitleWithIcon icon={<FaFileAlt />} text="Overview" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item, index) => (
            <div
              key={index}
              className={`relative ${item.bg} rounded-xl p-6 shadow-sm`}
            >
              <div className="text-gray-500 text-sm mb-1">{item.title}</div>
              <div className="text-2xl font-bold text-gray-800">
                {item.value}
              </div>
              <div className="text-green-500 text-sm mt-1">
                {item.change} period of change
              </div>
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Report */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <TitleWithIcon icon={<FaFileAlt />} text="Detailed report" />
          <div className="flex gap-2">
            {buttonData.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 ${item.bg} text-pink-600 font-semibold px-4 py-2 rounded-lg shadow-sm`}
                style={{
                  backgroundColor: "transparent",
                  color: "#FF1493",
                  border: "1px solid #FF1493",
                }}
              >
                {item.icon}
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
          <table className="w-full">
            <thead className="px-4 py-3 text-left font-medium uppercase text-gray-500">
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left w-10">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-3 font-medium">Customer Name</th>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Order Value</th>
                <th className="px-4 py-3 font-medium">Order Date</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 text-gray-500"
                >
                  <td className="px-4 py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2 font-bold">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                      {item.avatar ? (
                        <img src={item.avatar} alt="avatar" />
                      ) : (
                        <span>{item.name.charAt(0)}</span>
                      )}
                    </div>
                    <span>{item.name}</span>
                  </td>
                  <td className="px-4 py-3 font-semibold  ">{item.company}</td>
                  <td className="px-4 py-3">{item.value}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full items-center ${
                        item.status === "New"
                          ? "bg-blue-100 text-blue-600"
                          : item.status === "In-progress"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-pink-500 hover:text-pink-700 bg-transparent"
                    style={{backgroundColor: "transparent",}}>
                      <FaPen />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
          <span>{data.length} results</span>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 disabled:opacity-100 text-gray-500"
              style={{backgroundColor: "transparent"}}
            >
              &lt;
            </button>

            {(() => {
              const pages = [];
              const startPage = Math.max(1, currentPage);
              const endPage = Math.min(startPage + 4, totalPages);
              
              for (let i = startPage; i <= endPage; i++) {
                pages.push(
                  <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 ${
                      currentPage === i ? "bg-pink-500 text-white" : "text-gray-500"
                    }`}
                    style={{backgroundColor: currentPage === i ? "#FF1493" : "transparent"}}
                  >
                    {i}
                  </button>
                );
              }
              
              if (endPage < totalPages) {
                pages.push(
                  <span key="ellipsis" className="text-gray-500">...</span>
                );
              }

              if (endPage < totalPages) {
                pages.push(
                  <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500"
                    style={{backgroundColor: currentPage === totalPages ? "#FF1493" : "transparent"}}
                  >
                    {totalPages}
                  </button>
                );
              }
              
              return pages;
            })()}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 disabled:opacity-100 text-gray-500"
              style={{backgroundColor: "transparent"}}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
