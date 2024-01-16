export const actionTypes = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_SELECTED_PRODUCT: 'SET_SELECTED_PRODUCT',
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  SORT_PRODUCTS: 'SORT_PRODUCTS',
  SEARCH_PRODUCTS: 'SEARCH_PRODUCTS',
};

export const setProducts = (products) => ({
  type: actionTypes.SET_PRODUCTS,
  payload: products,
});

export const setSelectedProduct = (product) => ({
  type: actionTypes.SET_SELECTED_PRODUCT,
  payload: product,
});

export const addProduct = (product) => ({
  type: actionTypes.ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: actionTypes.DELETE_PRODUCT,
  payload: productId,
});

export const updateProduct = (product) => ({
  type: actionTypes.UPDATE_PRODUCT,
  payload: product,
});
export const sortProducts = (option) => ({
  type: actionTypes.SORT_PRODUCTS,
  payload: option,
});
export const searchProducts = (searchTerm) => ({
  type: actionTypes.SEARCH_PRODUCTS,
  payload: searchTerm,
});
