// components/Checkout.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import './Checkout.css';

function Checkout() {
  const menuItems = [
    { name: 'Masala Dosa', price: 35, isVeg: true },
    { name: 'Onion Dosa', price: 35, isVeg: true },
    { name: 'Podi Dosa', price: 40, isVeg: true },
    { name: 'Ghee Roast', price: 55, isVeg: true },
    { name: 'Masala Ghee Dosa', price: 60, isVeg: true },
    { name: 'Egg Dosa', price: 40, isVeg: false },
    { name: 'Plain Dosa', price: 30, isVeg: true },
    { name: 'Cheese Dosa', price: 50, isVeg: true },
    { name: 'Chicken Dosa', price: 60, isVeg: false },
    { name: 'Paneer Dosa', price: 55, isVeg: true },
    { name: 'Uttapam', price: 45, isVeg: true },
    { name: 'Idli', price: 25, isVeg: true },
    { name: 'Vada', price: 30, isVeg: true },
  ];

  const [cart, setCart] = useState([]);
  const [vegFilter, setVegFilter] = useState(true);
  const [nonVegFilter, setNonVegFilter] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    const existingItem = cart.find((cartItem) => cartItem.name === itemName);
    if (existingItem.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.name !== itemName));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === itemName
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const filteredItems = menuItems
    .filter((item) => {
      if ((vegFilter && nonVegFilter) || (!vegFilter && !nonVegFilter)) {
        return true;
      }
      if (vegFilter && item.isVeg) return true;
      if (nonVegFilter && !item.isVeg) return true;
      return false;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="checkout-container">
      <Navbar />
      <div className="location-header">
        <h2>L - BLOCK PAID MESS</h2>
        <div className="filter-search-bar">
          <div className="filter-sliders">
            <div className="filter-slider">
              <span className="filter-label">VEG</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={vegFilter}
                  onChange={() => setVegFilter(!vegFilter)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="filter-slider">
              <span className="filter-label">NON-VEG</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={nonVegFilter}
                  onChange={() => setNonVegFilter(!nonVegFilter)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="menu-section menu-box">
          <div className="heading-strip">
            <h3>TIFFINS</h3>
          </div>
          <div className="menu-items">
            {paginatedItems.map((item, index) => (
              <div
                key={index}
                className="menu-item"
                onClick={() => addToCart(item)}
              >
                <p>{item.name}</p>
                <p>Rs. {item.price}/-</p>
              </div>
            ))}
          </div>
          <div className="pagination-controls">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              Previous
            </button>
            <div className="pagination-dots">
              {Array.from({ length: totalPages }, (_, index) => (
                <span
                  key={index}
                  className={`dot ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => goToPage(index + 1)}
                />
              ))}
            </div>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        </div>

        <div className="cart-section">
          <h3>MY CART</h3>
          <div className="cart-header">
            <span>Item</span>
            <span>Qty</span>
            <span>Price</span>
          </div>
          <div className="cart-items-container">
            {cart.length === 0 ? (
              <p style={{ textAlign: 'center' }}>Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name}</span>
                  <div className="quantity-controls">
                    <button onClick={() => addToCart(item)}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => removeFromCart(item.name)}>-</button>
                  </div>
                  <span>Rs {item.price * item.quantity}</span>
                </div>
              ))
            )}
          </div>
          <div className="cart-total">
            <span>TOTAL AMOUNT:</span>
            <span>Rs {totalAmount}</span>
          </div>
          <button className="proceed-btn">PROCEED</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;