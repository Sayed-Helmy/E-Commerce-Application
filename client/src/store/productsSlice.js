import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { name: "test" },
  reducers: {},
});

export default productsSlice.reducer;