import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, setSelectedProduct } from '../store/action';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);

  const [editedProduct, setEditedProduct] = useState({ ...selectedProduct });

  useEffect(() => {
    setEditedProduct({ ...selectedProduct });
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Add validation logic here before saving
    if (isValidProduct(editedProduct)) {
      dispatch(updateProduct(editedProduct));
    } else {
      alert('Invalid product details. Please check and try again.');
    }
  };

  const isValidProduct = (product) => {
    return (
      product.name.trim() !== '' &&
      product.price > 0 &&
      // Add more validation rules as needed
      // ...
      true
    );
  };

  if(!selectedProduct){
    return
  }

  return (
    <div
      style={{
        position: 'relative',
        width: 400,
        height: 460,
        border: '1px solid gray',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 15, // Add margin between sections
        padding: 15, // Add padding to the container
      }}
    >
      <h4
        style={{
          position: 'absolute',
          top: -11,
          left: 10,
          margin: 0,
          zIndex: 1,
          backgroundColor: 'white',
        }}
      >
        Product Details
      </h4>

      <img
        src={editedProduct.image}
        alt="Product"
        style={{ marginTop: 5, textAlign: 'center' }}
      />

      {/* Name Section */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={editedProduct.name}
          onChange={handleInputChange}
        />
      </div>

      {/* Description Section */}
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={editedProduct.description}
          onChange={handleInputChange}
          style={{ width: '100%', height: 200, boxSizing: 'border-box' }}
        />
      </div>

      {/* Price Section */}
      <div style={{ marginTop: 10 }}>
        <label>Price:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
            style={{ width: 50, marginRight: 5 }}
          />
          $
        </div>
      </div>

      {/* Save Button */}
      <button
        style={{
          backgroundColor: 'green',
          marginTop: 'auto', // Push the button to the bottom
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}
        onClick={handleSaveClick}
      >
        Save
      </button>
    </div>
  );
};

export default ProductDetails;
