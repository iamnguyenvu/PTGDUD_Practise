import React from 'react';

const TitleWithIcon = ({ icon, text }) => (
  <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
    <span className="bg-pink-100 text-pink-500 p-2 rounded-full">{icon}</span>
    {text}
  </h2>
);

export default TitleWithIcon;