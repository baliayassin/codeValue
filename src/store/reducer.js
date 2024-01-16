import { actionTypes } from './action';

const initialState = {
  products: [],
  selectedProduct: null,
  searchTerm: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        selectedProduct: action.payload,
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        selectedProduct: null,
      };
    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        selectedProduct: action.payload,
      };
    case actionTypes.SORT_PRODUCTS:
      const sortedProducts = [...state.products];
      if (action.payload === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === 'recent') {
        sortedProducts.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        products: sortedProducts,
      };
    case actionTypes.SEARCH_PRODUCTS:
      return {
        ...state,
        searchTerm: action.payload.toLowerCase(),
      };
    default:
      return state;
  }
};

export default reducer;
