import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  featured: [],
  filtered: [],
  categories: [],
  errors: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {
    setProducts(state, action) {
      state.featured = action.payload;
    },
    setFiltered(state, action) {
      state.filtered = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    addreview(state, action) {
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
