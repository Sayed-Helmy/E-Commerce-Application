import adminReducer from "./adminSlice";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import userReducer from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
    admin: adminReducer,
  },
});

export default store;
