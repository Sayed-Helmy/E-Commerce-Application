import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    desc: "Enjoy With",
    name: "HEADPHONES",
    href: "#",
    price: "$48",
    category: "laptop",
    colorGradient: "black",
    gridClass: "",

    imageSrc: "/assets/category-1.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    desc: "New Wear",
    name: "GADGETS",
    href: "#",
    price: "$35",
    category: "laptop",
    colorGradient: "[#FEC62E]",
    gridClass: "",
    imageSrc: "/assets/category-2.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    desc: "Trend Devices",
    name: "LAPTOP",
    href: "#",
    price: "$89",
    category: "laptop",
    colorGradient: "[#F42C37]",
    gridClass: true,
    imageSrc: "/assets/category-3.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    desc: "Enjoy With",
    name: "HEADPHONES",
    href: "#",
    category: "laptop",
    price: "$35",
    colorGradient: "[#F42C37]",
    gridClass: true,
    imageSrc: "/assets/category-1.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    desc: "New Wear",
    name: "GADGETS",
    href: "#",
    category: "laptop",
    price: "$35",
    colorGradient: "[#FEC62E]",
    gridClass: "",
    imageSrc: "/assets/category-2.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    desc: "Trend Devices",
    name: "LAPTOP",
    href: "#",
    category: "laptop",
    price: "$35",
    colorGradient: "black",
    gridClass: "",
    imageSrc: "/assets/category-3.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Categories() {
  return (
    <div>
      <div className="px-2 pb-16 pt-32 sm:pb-20 text-5xl sm:text-6xl font-bold text-center">
        <h1> Our Categories </h1>
      </div>
      <div className="max-w-2xl mx-auto  px-4  sm:px-6 md:max-w-7xl lg:px-8">
        <h2 className="sr-only">Categories</h2>
        {/* <div className="grid grid-rows-2 grid-cols-test"> */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
