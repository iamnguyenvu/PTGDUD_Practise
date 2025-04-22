import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../features/CartSlice';

const sampleProducts = [
  { id: 1, name: 'Laptop', price: 1200, image: '💻' },
  { id: 2, name: 'Smartphone', price: 800, image: '📱' },
  { id: 3, name: 'Headphones', price: 100, image: '🎧' },
  { id: 4, name: 'Smartwatch', price: 250, image: '⌚' },
];

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="p-4 border rounded-lg shadow-md mb-6">
      <h3 className="text-2xl mb-4">Shopping Cart</h3>
      
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => setShowCart(!showCart)} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {showCart ? 'Hide Cart' : 'Show Cart'} 
          <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {totalQuantity}
          </span>
        </button>
        <div className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</div>
      </div>

      {showCart && (
        <div className="mt-4">
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <div>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b py-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{item.image}</span>
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-6">
        <h4 className="font-bold mb-2">Available Products</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sampleProducts.map((product) => (
            <div key={product.id} className="border rounded p-2 text-center">
              <div className="text-4xl mb-2">{product.image}</div>
              <h5 className="font-bold">{product.name}</h5>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="mt-2 bg-green-500 text-white px-4 py-1 rounded text-sm"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;