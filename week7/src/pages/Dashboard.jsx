import React, { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import axios from "axios";
import Modal from "../components/Modal";
import ImportModal from "../components/ImportModal";
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
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"

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
    console.log("Edit clicked with item:", item);
    setSelectedItem(item);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleButtonClick = (item) => {
    // Check if the clicked button is the import button
    if (item.title.toLowerCase().includes('import')) {
      setIsImportModalOpen(true);
    }
    // Handle other button clicks if needed
  };

  const handleImportFile = () => {
    // Logic for importing from file
    console.log("Import from file action triggered");
    setIsImportModalOpen(false);
    // You can add additional logic here like opening a file picker
  };

  const handleAddUser = () => {
    // Logic for adding a user manually
    console.log("Add user action triggered");
    setIsImportModalOpen(false);
    setSelectedItem({
      name: '',
      company: '',
      value: '',
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    });
    setModalMode("add");
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
              <ActionButton 
                key={index} 
                item={item} 
                iconMap={iconMap} 
                onClick={handleButtonClick}
              />
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
          key={`modal-${modalMode}-${selectedItem?.id || 'new'}`}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
          mode={modalMode}
          onSave={(updatedItem) => {
            setData((prevData) => {
              // If the item has an ID, it means we're updating an existing item
              if (updatedItem.id) {
                return prevData.map((item) =>
                  item.id === updatedItem.id ? updatedItem : item
                );
              } 
              // Otherwise, we're adding a new item
              else {
                return [...prevData, updatedItem];
              }
            });
          }}
        />
      )}

      <ImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImportFile={handleImportFile}
        onAddUser={handleAddUser}
      />
    </div>
  );
};

export default Dashboard;
