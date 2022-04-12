import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  featured: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {
    setProducts(state, action) {
      state.featured = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
