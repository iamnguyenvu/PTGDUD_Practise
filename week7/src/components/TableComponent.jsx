import React from 'react';
import { FaPen } from "react-icons/fa";

const TableComponent = ({ paginatedData, handleEditClick }) => {
  return (
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
              <td className="px-4 py-3 font-semibold">{item.company}</td>
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
                <button
                  onClick={() => {
                    console.log("Edit item:", item); // Debug log
                    handleEditClick({
                      ...item, 
                      id: item.id // Explicitly ensure ID is included
                    });
                  }}
                  className="text-pink-500 hover:text-pink-700 bg-transparent"
                  style={{ backgroundColor: "transparent" }}
                >
                  <FaPen />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;