import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  orders: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setOrders(state, action) {
      state.orders = action.payload;
    },
    updateUser(state, action) {
      const index = state.users.findIndex(
        (item) => item._id === action.payload._id
      );
      state.users[index] = action.payload;
    },
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
