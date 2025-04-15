import React, { useEffect, useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import axios from "axios";
import Modal from "../components/Modal";
import TitleWithIcon from "../components/TitleWithIcon";
import TableComponent from "../components/TableComponent";
import Pagination from "../components/Pagination";

const Projects = () => {
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
    return <div className="text-center text-gray-500">Loading projects...</div>;
  }
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  if (data.length === 0) {
    return <div className="text-center text-gray-500">No projects available</div>;
  }

  return (
    <div className="space-y-10">
      <section>
        <TitleWithIcon icon={<FaProjectDiagram />} text="Active Projects" />
        
        <div className="mt-6">
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

export default Projects;