import React from 'react';

const OverviewCard = ({ item, iconMap }) => {
  return (
    <div className={`relative ${item.bg} rounded-xl p-6 shadow-sm`}>
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
  );
};

export default OverviewCard;