import React, { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaDollarSign,
  FaUserPlus,
  FaFileAlt,
  FaPen,
  FaFileImport,
  FaFileExport,
} from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {
  const [cardData, setCardData] = useState([]);
  const [buttonData, setButtonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://67f79c992466325443e9f31f.mockapi.io/data/card"
        );
        setCardData(response.data);
        
      } catch (error) {
        console.error("Error fetching card data:", error.message);
      }

      try {
        const response = await axios.get(
          "https://67f79c992466325443e9f31f.mockapi.io/data/button"
        );
        setButtonData(response.data);
      } catch (error) {
        console.error("Error fetching button data:", error.message);
      }
    };
    fetchData();
  }, []);

  const TitleWithIcon = ({ icon, text }) => (
    <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
      <span className="bg-pink-100 text-pink-500 p-2 rounded-full">{icon}</span>
      {text}
    </h2>
  );

  const iconMap = {
    FaShoppingCart: <FaShoppingCart />,
    FaDollarSign: <FaDollarSign />,
    FaUserPlus: <FaUserPlus />,
    FaFileImport: <FaFileImport />,
    FaFileExport: <FaFileExport />,
  };

  return (
    <div className="space-y-10 ">
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
                <span className={item.iconColor}>
                  {iconMap[item.icon] || null}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Detailed Report */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <TitleWithIcon icon={<FaFileAlt />} text="Detailed report" />
          </div>
          <div className="flex flex-wrap gap-2">
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
                {iconMap[item.icon] || null}
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </section>
      

        
    </div>
  );
};

export default Dashboard;
