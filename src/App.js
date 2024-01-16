import React from 'react';
import './style.css';
import { Provider } from 'react-redux';
import store from './store/index';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Navbar />
      <div style={{ display: 'flex' }}>
        <ProductList />
        <div style={{ width: '100%', height: '100%', marginLeft: 10 }} />
        <ProductDetails />
      </div>
    </Provider>
  );
}
