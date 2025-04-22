import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, setUserInfo } from '../features/AuthSlice';

const AuthUser = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });
  
  const [userInfo, setUserInfoState] = useState({
    name: '',
    email: '',
    bio: ''
  });

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfoState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({
      id: Date.now(),
      username: loginForm.username,
      name: 'User ' + loginForm.username
    }));
    setLoginForm({ username: '', password: '' });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(userInfo));
    setUserInfoState({
      name: '',
      email: '',
      bio: ''
    });
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-2xl mb-4">User Authentication</h3>
      
      {isLoggedIn ? (
        <div className="space-y-4">
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
            <p className="font-bold">Welcome, {user?.name || user?.username}!</p>
            {user?.email && <p>Email: {user.email}</p>}
            {user?.bio && <p>Bio: {user.bio}</p>}
          </div>
          
          <form onSubmit={handleUpdateUserInfo} className="space-y-3">
            <h4 className="font-bold">Update Profile Information</h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleUserInfoChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleUserInfoChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={userInfo.bio}
                onChange={handleUserInfoChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Tell us about yourself"
                rows="3"
              />
            </div>
            
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Profile
            </button>
          </form>
          
          <div className="pt-3 border-t">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={loginForm.username}
              onChange={handleLoginFormChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleLoginFormChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthUser;