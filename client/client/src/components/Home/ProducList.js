import { useSelector } from "react-redux";
import Product from "./Product";

export default function ProductList() {
  const products = useSelector((state) => state.products.featured);
  return (
    <div>
      <div className="mb-16 mt-16 px-2 text-center sm:mb-20">
        <h1 className="text-5xl font-bold sm:text-6xl">Best Seller Products</h1>
      </div>
      <div className="mx-auto max-w-2xl px-4  pb-16 sm:px-6 md:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
