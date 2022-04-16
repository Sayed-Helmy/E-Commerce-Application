import { useSelector } from "react-redux";
import Product from "./Product";

export default function ProductList() {
  const products = useSelector((state) => state.products.featured);
  return (
    <div>
      <div className="px-2 mb-16 mt-32 sm:mb-20 text-5xl sm:text-6xl font-bold text-center">
        <h1> Best Seller Products </h1>
      </div>
      <div className="max-w-2xl mx-auto px-4  sm:px-6 md:max-w-7xl lg:px-8 pb-28">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
