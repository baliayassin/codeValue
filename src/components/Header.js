import React from 'react';

export default function Header() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#9fc5f8',
        height: 50,
        display: 'flex',
        border: '2px solid black',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 20,
        }}
      >
        My Store
      </div>
    </div>
  );
}
