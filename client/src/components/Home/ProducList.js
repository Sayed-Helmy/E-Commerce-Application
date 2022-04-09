import Product from "./Product";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    category: "HEADPHONES",

    imageSrc:
      "/assets/best-seller-1.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    category: "HEADPHONES",

    imageSrc:
      "/assets/best-seller-2.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    category: "laptop",

    imageSrc:
      "/assets/best-seller-3.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: "$35",
    imageSrc:
      "/assets/best-seller-4.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: "$35",
    imageSrc:
      "/assets/best-seller-5.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical Pencil",
    href: "#",
    category: "laptop",
    price: "$35",
    imageSrc:
      "/assets/best-seller-6.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function ProductList() {
  return (
    <div>
      <div className="px-2 mb-16 mt-32 sm:mb-20 text-5xl sm:text-6xl font-bold text-center"><h1> Best Seller Products </h1></div>
      <div className="max-w-2xl mx-auto px-4  sm:px-6 md:max-w-7xl lg:px-8 pb-28">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
