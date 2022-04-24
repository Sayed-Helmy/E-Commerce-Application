import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetails from "../components/admin/products/ProductDetails";

export default function ProductPage() {
  const productId = useParams();
  const products = useSelector((state) => state.products.featured);
  const user = useSelector((state) => state.user);
  const product = products.find((item) => item._id === productId.id);
  return <>{product && <ProductDetails user={user} product={product} />}</>;
}
