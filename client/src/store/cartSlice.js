import { createSlice } from "@reduxjs/toolkit";

const intialVlaue = {
  cartItems: [
    {
      id: 1,
      name: "White EliteBook Tablet  ",
      price: 900,
      rating: 3.9,
      reviewCount: 117,
      inStock: 10,
      href: "shop/product1",
      imageSrc: "/assets/best-seller-1.png",
      imageAlt: "Two each of gray, white, and black shirts arranged on table.",
      category: "HEADPHONES",
      quantity: 1,
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "product2",
      price: 35,
      category: "HEADPHONES",
      rating: 3.9,
      reviewCount: 117,
      inStock: 10,
      imageSrc: "/assets/best-seller-2.png",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      quantity: 1,
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: 89,
      category: "laptop",
      imageSrc: "/assets/best-seller-3.png",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
      quantity: 1,
    },
  ],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: intialVlaue,
  reducers: {
    getCount(state, action) {
      state.cartCount = state.cartItems.reduce((a, b) => a + b.quantity, 0);
    },
    setQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );
      if (action.payload.quantity === 0) {
        state.cartItems.splice(itemIndex, 1);
      } else {
        state.cartItems[itemIndex].quantity = action.payload.quantity;
      }
    },
    delProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );
      state.cartItems.splice(itemIndex, 1);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
