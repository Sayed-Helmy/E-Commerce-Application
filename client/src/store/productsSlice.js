import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: "1",
    name: "White EliteBook Tablet  ",
    price: 900,
    rating: 5.9,
    reviewCount: 33,
    inStock: 17,
    href: "shop/product1",
    imageSrc: "/assets/best-seller-1.png",
    imageAlt: "Two each of gray, white, and black shirts arranged on table.",
    category: "HEADPHONES",
  },
  {
    id: "2",
    name: "Nomad Tumbler",
    href: "product2",
    price: 35,
    category: "HEADPHONES",
    rating: 4.9,
    reviewCount: 71,
    inStock: 0,
    imageSrc: "/assets/best-seller-2.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: "3",
    name: "Focus Paper Refill",
    href: "#",
    price: 89,
    category: "laptop",
    inStock: 13,
    reviewCount: 117,
    rating: 2.5,
    imageSrc: "/assets/best-seller-3.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: "4",
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: 35,
    inStock: 130,
    reviewCount: 11,
    rating: 3.5,
    imageSrc: "/assets/best-seller-4.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: "5",
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: 35,
    inStock: 13,
    reviewCount: 117,
    rating: 3.9,
    imageSrc: "/assets/best-seller-5.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: "6",
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: 35,
    inStock: 10,
    rating: 3.9,
    reviewCount: 117,
    imageSrc: "/assets/best-seller-6.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const productsSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {},
});

export default productsSlice.reducer;
