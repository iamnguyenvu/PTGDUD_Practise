import React, { useEffect } from "react";
import imgBg from "../src/assets/bg.png";
import avatar from "../src/assets/avatar.png";

const Content = () => {
  return (
    <main className="relative text-center">
      <img
        src={imgBg}
        alt="Chef Cooking"
        className="w-full h-[600px] object-cover"
      />
      <div className="absolute top-1/2 left-30 transform -translate-y-1/2 bg-white bg-opacity-90 shadow-xl p-6 rounded-lg max-w-xs">
        <div className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full mb-2 font-semibold">
          Recipe of the day
        </div>
        <h2 className="text-pink-600 text-xl font-bold mb-2">Salad Caprese</h2>
        <p className="text-gray-700 text-sm mb-4">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs,
          olive oil, and balsamic vinegar create a refreshing dish for lunch or
          appetizer.
        </p>
        <div className="text-sm text-gray-600 mb-4 flex items-center justify-center">
          <img src={avatar} alt="Author" className="rounded-full" />
        </div>
        <div className="text-sm text-gray-600 mb-4">Salad Caprese</div>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm">
          View now →
        </button>
      </div>
    </main>
  );
};

export default Content;
