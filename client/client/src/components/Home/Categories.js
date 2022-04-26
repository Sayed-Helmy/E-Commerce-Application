import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
export default function Categories() {
  const categories = [...useSelector((state) => state.products.categories)];
  return (
    <div>
      <div className="px-2 pb-16 pt-5 text-center sm:pb-20 ">
        <h1 className="text-5xl font-bold sm:text-6xl"> Our Categories </h1>
      </div>
      <div className="mx-auto max-w-2xl  px-4  sm:px-6 md:max-w-7xl lg:px-8">
        <h2 className="sr-only">Categories</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {categories &&
            categories
              .sort((a, b) => a.order - b.order)
              .map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
        </div>
      </div>
    </div>
  );
}
