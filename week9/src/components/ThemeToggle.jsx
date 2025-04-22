import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/ThemeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  
  // Apply theme to body element
  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h3 className="text-2xl my-4">Toggle Theme</h3>
      
      <div className="flex items-center space-x-4">
        <span>Current Theme: {theme}</span>
        <button
          onClick={() => dispatch(toggleTheme())}
          className={`px-4 py-2 rounded ${
            theme === 'dark'
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
              : 'bg-gray-700 text-white hover:bg-gray-800'
          }`}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;