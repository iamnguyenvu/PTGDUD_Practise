import React from 'react';
import { FaFileImport, FaUserPlus } from 'react-icons/fa';

const ImportModal = ({ isOpen, onClose, onImportFile, onAddUser }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-bold mb-4">Import Options</h3>
        
        <div className="space-y-4">
          <button
            onClick={onImportFile}
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FaFileImport className="text-[#FF1493] text-xl" />
              <span className="font-medium">Import from file</span>
            </div>
            <span className="text-gray-400">→</span>
          </button>
          
          <button
            onClick={onAddUser}
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FaUserPlus className="text-[#FF1493] text-xl" />
              <span className="font-medium">Add a user</span>
            </div>
            <span className="text-gray-400">→</span>
          </button>
        </div>
        
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#FF1493] text-[#FF1493] rounded hover:bg-gray-100"
            style={{border: "1px solid #FF1493"}}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportModal;