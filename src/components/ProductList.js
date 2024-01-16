import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProducts,
  setSelectedProduct,
  deleteProduct,
} from '../store/action';
import Product from './Product';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const selectedProduct = useSelector((state) => state.selectedProduct);

  const searchTerm = useSelector((state) => state.searchTerm);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  useEffect(() => {
    const initialProducts = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description for Product 1',
        image: 'https://example.com/image.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description for Product 2',
        image: 'https://example.com/image.jpg',
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description for Product ',
        image: 'https://example.com/image.jpg',
      },
      {
        id: 4,
        name: 'Product 4',
        description: 'Description for Product 4',
        image: 'https://example.com/image.jpg',
      },
    ];
    dispatch(setProducts(initialProducts));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
  };

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="product-list">
        {currentItems.map((product) => (
          <div key={product.id} className="product-item">
            <Product
              productData={product}
              onDelete={() => handleDelete(product.id)}
              isSelected={product.id === selectedProduct?.id}
              onClick={() => handleProductClick(product)}
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        <span onClick={prevPage}>{`< Prev Page  `}</span>

        <span>{`${currentPage} of ${Math.ceil(
          filteredProducts.length / itemsPerPage
        )}`}</span>
        <span onClick={nextPage}>{`  Next Page >`}</span>
      </div>
    </div>
  );
};

export default ProductList;
