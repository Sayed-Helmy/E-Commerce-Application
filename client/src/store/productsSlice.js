import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  products: [],
  filtered: [],
  categories: [],
  errors: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setFiltered(state, action) {
      state.filtered = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    deleteProduct(state, action) {
      const index = state.products.findIndex((i) => i._id === action.payload);
      state.products.splice(index, 1);
    },
    addreview(state, action) {
      console.log(action.payload);
      const productIndex = state.featured.findIndex(
        (item) => item._id === action.payload._id
      );
      state.featured[productIndex] = action.payload;
    },
    errorHandler(state, action) {
      state.errors[action.payload.field] = action.payload.error;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
