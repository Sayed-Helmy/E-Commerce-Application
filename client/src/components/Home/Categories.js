import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
export default function Categories() {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/categories", {
        withCredentials: true,
      })
      .then((result) => {
        setcategories(result.data);
      });
  }, []);
  return (
    <div>
      <div className="px-2 pb-16 pt-32 text-center  sm:pb-20 ">
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
