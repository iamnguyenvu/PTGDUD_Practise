import { useState } from "react";
import axios from 'axios';

const Modal = ({ isOpen, onClose, item, onSave }) => {
  if (!isOpen) return null;

  const [editedData, setEditedData] = useState({
    name: item.name,
    company: item.company,
    value: item.value,
    date: item.date,
    status: item.status,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `https://67d53cb6d2c7857431efc348.mockapi.io/travel-app/api/chefify-admin/${item.id}`,
        editedData
      );
      onSave(response.data); 
      onClose(); 
    } catch (error) {
      console.error("Error updating item", error);
    }
  };
const formFields = [
    { name: 'name', label: 'Customer Name', type: 'text' },
    { name: 'company', label: 'Company', type: 'text' },
    { name: 'value', label: 'Order Value', type: 'text' },
    { name: 'date', label: 'Order Date', type: 'date' },
    { name: 'status', label: 'Status', type: 'select', options: [
        { value: 'New', label: 'New' },
        { value: 'In-progress', label: 'In-progress' },
        { value: 'Completed', label: 'Completed' }
    ] }
];

return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Edit Customer</h3>
            
            {formFields.map((field) => (
                <div className="mb-4" key={field.name}>
                    <label htmlFor={field.name} className="block text-gray-600">
                        {field.label}
                    </label>
                    
                    {field.type === 'select' ? (
                        <select
                            name={field.name}
                            value={editedData[field.name]}
                            onChange={handleInputChange}
                            className="mt-2 p-2 border border-gray-300 rounded w-full"
                        >
                            {field.options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            value={editedData[field.name]}
                            onChange={handleInputChange}
                            className="mt-2 p-2 border border-gray-300 rounded w-full"
                        />
                    )}
                </div>
            ))}
            
            <div className="flex justify-end gap-2">
                <button
                    onClick={onClose}
                    className="px-4 py-2 border border-[#FF1493] text-[#FF1493] rounded hover:bg-gray-100"
                    style={{border: "1px solid #FF1493"}}
                >
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-[#FF1493] text-white rounded hover:bg-pink-600"
                >
                    Save Changes
                </button>
            </div>
        </div>
    </div>
);
};

export default Modal;
