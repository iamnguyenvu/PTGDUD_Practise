import React, { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import axios from "axios";
import Modal from "../components/Modal";
import TitleWithIcon from "../components/TitleWithIcon";
import OverviewCard from "../components/OverviewCard";
import ActionButton from "../components/ActionButton";
import TableComponent from "../components/TableComponent";
import Pagination from "../components/Pagination";
import { iconMap } from "../utils/iconUtils";

const Dashboard = () => {
  const [cardData, setCardData] = useState([]);
  const [buttonData, setButtonData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const totalPages = Math.ceil(data.length / itemPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
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
    <div className="space-y-10 ">
      {/* Overview */}
      <section>
        <TitleWithIcon icon={<FaFileAlt />} text="Overview" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item, index) => (
            <OverviewCard key={index} item={item} iconMap={iconMap} />
          ))}
        </div>
      </section>
      
      {/* Detailed Report */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <TitleWithIcon icon={<FaFileAlt />} text="Detailed report" />
          </div>
          <div className="flex flex-wrap gap-2">
            {buttonData.map((item, index) => (
              <ActionButton key={index} item={item} iconMap={iconMap} />
            ))}
          </div>
        </div>
      </section>

      <TableComponent 
        paginatedData={paginatedData} 
        handleEditClick={handleEditClick} 
      />

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={data.length}
        handlePageChange={handlePageChange}
      />

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
          onSave={(updatedItem) => {
            setData((prevData) =>
              prevData.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
              )
            );
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
