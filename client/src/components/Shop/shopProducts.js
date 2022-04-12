import React from "react";
import Product from "../Home/Product";

const products = [
  {
    id: 1,
    name: "White EliteBook Tablet  ",
    price: "900$",
    rating: 3.9,
    reviewCount: 117,
    inStock: 10,
    href: "shop/product1",
    imageSrc: "/assets/best-seller-1.png",
    imageAlt: "Two each of gray, white, and black shirts arranged on table.",
    category: "HEADPHONES",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "product2",
    price: "$35",
    category: "HEADPHONES",
    rating: 3.9,
    reviewCount: 117,
    inStock: 10,

    imageSrc: "/assets/best-seller-2.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    category: "laptop",

    imageSrc: "/assets/best-seller-3.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: "$35",
    imageSrc: "/assets/best-seller-4.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: "$35",
    imageSrc: "/assets/best-seller-5.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: "$35",
    imageSrc: "/assets/best-seller-6.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const ShopProducts = () => {
  return <div>
    <div >
      {/* Shop products */}
      <div className="col-span-3 ">
        <div className="max-w-2xl px-2 md:max-w-5xl pb-28">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div> 

    </div>
  </div>;
};

export default ShopProducts;
