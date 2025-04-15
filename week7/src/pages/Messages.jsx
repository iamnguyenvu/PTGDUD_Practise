import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaTrash, FaStar, FaReply } from 'react-icons/fa';
import TitleWithIcon from '../components/TitleWithIcon';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        // Using the same API for demonstration purposes
        const response = await axios.get(
          "https://67d53cb6d2c7857431efc348.mockapi.io/travel-app/api/chefify-admin"
        );
        
        // Transform the data into a message-like format
        const transformedData = response.data.map(item => ({
          id: item.id,
          sender: item.name,
          company: item.company,
          subject: `Project Update: ${item.company}`,
          message: `Latest update regarding the ${item.company} project. Current value: ${item.value}. Status: ${item.status}`,
          date: new Date(item.date).toLocaleDateString(),
          read: Math.random() > 0.5, // Randomly set as read or unread
          starred: Math.random() > 0.7, // Randomly star some messages
        }));
        
        setMessages(transformedData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    
    fetchMessages();
  }, []);

  const handleMessageClick = (message) => {
    // Mark as read when clicked
    if (!message.read) {
      setMessages(prevMessages => 
        prevMessages.map(m => 
          m.id === message.id ? { ...m, read: true } : m
        )
      );
    }
    setSelectedMessage(message);
  };

  const toggleStar = (id, e) => {
    e.stopPropagation(); // Prevent triggering the message click
    setMessages(prevMessages => 
      prevMessages.map(m => 
        m.id === id ? { ...m, starred: !m.starred } : m
      )
    );
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading messages...</div>;
  }
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  if (messages.length === 0) {
    return <div className="text-center text-gray-500">No messages available</div>;
  }

  return (
    <div className="space-y-6">
      <TitleWithIcon icon={<FaEnvelope />} text="Messages" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Message List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold">Inbox</h3>
          </div>
          
          <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
            {messages.map(message => (
              <div 
                key={message.id}
                className={`p-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedMessage?.id === message.id ? 'bg-gray-100' : ''
                } ${!message.read ? 'font-semibold' : ''}`}
                onClick={() => handleMessageClick(message)}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-900">{message.sender}</span>
                  <span className="text-xs text-gray-500">{message.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600 truncate w-3/4">{message.subject}</p>
                  <button 
                    onClick={(e) => toggleStar(message.id, e)}
                    className={`text-sm ${message.starred ? 'text-yellow-400' : 'text-gray-400'}`}
                  >
                    <FaStar />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Message Detail */}
        <div className="md:col-span-2">
          {selectedMessage ? (
            <div className="bg-white rounded-lg shadow h-full">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-semibold">{selectedMessage.subject}</h2>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-blue-500">
                    <FaReply />
                  </button>
                  <button className="text-gray-500 hover:text-red-500">
                    <FaTrash />
                  </button>
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-200">
                <p className="text-sm text-gray-600">
                  From: <span className="font-semibold">{selectedMessage.sender}</span>
                  {selectedMessage.company && (
                    <span> ({selectedMessage.company})</span>
                  )}
                </p>
                <p className="text-sm text-gray-600">Date: {selectedMessage.date}</p>
              </div>
              
              <div className="p-4">
                <p className="text-gray-800 whitespace-pre-line">{selectedMessage.message}</p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow h-full flex items-center justify-center">
              <p className="text-gray-500">Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;