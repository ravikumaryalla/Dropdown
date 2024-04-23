import React, { useState } from 'react';
import './Dropdown.css'; // Make sure to create a corresponding CSS file

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onMouseEnter={() => setIsOpen(true)}>
        {selectedItem || 'Select'}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li key={item.id} className="dropdown-item" onClick={() => handleItemClick(item.name)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
