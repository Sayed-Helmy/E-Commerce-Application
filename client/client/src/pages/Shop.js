import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ShopFilter from "../components/Shop/shopFilter";
import { productsActions } from "../store/productsSlice";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/products`, {
        withCredentials: true,
      })
      .then((res) => dispatch(productsActions.setFiltered(res.data)));
  }, [dispatch]);
  return (
    <div>
      {/* filter */}
      <div className="">
        <ShopFilter />
      </div>
    </div>
  );
};

export default Shop;
