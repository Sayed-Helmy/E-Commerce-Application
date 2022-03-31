import productsReducer from "./productsSlice";
import userReducer from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});

export default store;
