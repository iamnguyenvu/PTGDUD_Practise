import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import axios from "axios";
import Modal from "../components/Modal";
import TitleWithIcon from "../components/TitleWithIcon";
import TableComponent from "../components/TableComponent";
import Pagination from "../components/Pagination";

const Teams = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalMode, setModalMode] = useState("add");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Using the same API endpoint for demonstration purposes
        const response = await axios.get(
          "https://67d53cb6d2c7857431efc348.mockapi.io/travel-app/api/chefify-admin"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
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

  if (loading) {
    return <div className="text-center text-gray-500">Loading team members...</div>;
  }
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  if (data.length === 0) {
    return <div className="text-center text-gray-500">No team members available</div>;
  }

  return (
    <div className="space-y-10">
      <section>
        <TitleWithIcon icon={<FaUsers />} text="Team Members" />
        
        <div className="mt-6">
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <p className="text-gray-600 mb-2">Manage your team members and their account permissions here.</p>
            <button 
              className="bg-[#FF1493] text-white px-4 py-2 rounded-lg hover:bg-pink-600"
              onClick={() => {
                setSelectedItem({
                  name: '',
                  company: '',
                  value: '',
                  date: new Date().toISOString().split('T')[0],
                  status: 'New'
                });
                setModalMode("add");
                setIsModalOpen(true);
              }}
            >
              Add Team Member
            </button>
          </div>
          
          <TableComponent 
            paginatedData={paginatedData} 
            handleEditClick={handleEditClick} 
          />
        </div>
      </section>

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
              if (updatedItem.id) {
                return prevData.map((item) =>
                  item.id === updatedItem.id ? updatedItem : item
                );
              } else {
                return [...prevData, updatedItem];
              }
            });
          }}
        />
      )}
    </div>
  );
};

export default Teams;