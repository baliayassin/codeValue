import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, searchProducts, sortProducts } from '../store/action';

export default function Navbar() {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(sortProducts(event.target.value));
  };

  const handleSearch = () => {
    dispatch(searchProducts(searchTerm));
  };

  const handleAdd = () => {
    dispatch(
      addProduct({
        id: Date.now(),
        name: 'New Product',
        description: 'new',
        image: 'https://example.com/image.jpg',
      })
    );
  };

  return (
    <div
      style={{
        width: 500,
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'green',
          borderRadius: 4,
          width: 50,
          paddingLeft: 15,
          marginRight: 20,
        }}
        onClick={handleAdd}
      >
        add
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: 300,
          height: 30,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid gray',
            borderRadius: 10,
            padding: '5px',
          }}
        >
          <div
            style={{
              width: 20,
              marginRight: 10,
            }}
          >
            🌟
          </div>
          <input
            type="text"
            placeholder="Search product"
            style={{ width: 150, border: 'none', outline: 'none' }}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch();
            }}
          />
        </div>
      </div>
      <div style={{ width: 100 }}>Sort by</div>
      <div>
        <select
          id="sortDropdown"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="name">Name</option>
          <option value="recent">Recently Added</option>
        </select>
      </div>
    </div>
  );
}
