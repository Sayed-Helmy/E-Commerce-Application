import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      return (state = action.payload);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
