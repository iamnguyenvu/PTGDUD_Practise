import React from 'react';

const ActionButton = ({ item, iconMap }) => {
  return (
    <button
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
  );
};

export default ActionButton;