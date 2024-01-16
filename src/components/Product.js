import React from 'react';

export default function Product({
  productData,
  onDelete,
  onClick,
  isSelected,
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: 500,
        border: '1px solid black',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        backgroundColor: isSelected ? '#9fc5f8' : 'white',
      }}
      onClick={onClick}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={productData.image}
          alt="Product"
          style={{
            width: 100,
            height: 100,
            objectFit: 'cover',
            borderRadius: '10px 0 0 10px',
          }}
        />

        <div style={{ padding: '10px' }}>
          <h3>{productData.name}</h3>
          <p>{productData.description}</p>
        </div>
      </div>

      <button
        onClick={onDelete}
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          padding: '5px',
          backgroundColor: 'orange',
          borderRadius: 4,
        }}
      >
        Delete
      </button>
    </div>
  );
}
