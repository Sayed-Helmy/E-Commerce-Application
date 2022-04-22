import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../../helpers/dataModule";

const ProductForm = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const product = await axios.post(
        "http://localhost:5000/api/v1/products",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(product);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="prod-title">Title</label>
        <input type="text" name="title" id="prod-title" />
      </div>
      <div>
        <label htmlFor="prod-description">Description</label>
        <input type="text" name="description" id="prod-description" />
      </div>
      <div>
        <label htmlFor="prod-richDescription">RichDescription</label>
        <input type="text" name="richDescription" id="prod-richDescription" />
      </div>
      <div>
        <label htmlFor="prod-brand">Brand</label>
        <input type="text" name="brand" id="prod-brand" />
      </div>
      <div>
        <label htmlFor="prod-price">Price</label>
        <input type="text" name="price" id="prod-price" />
      </div>
      <div>
        <label htmlFor="prod-onSalePrice">OnSalePrice</label>
        <input type="text" name="onSalePrice" id="prod-onSalePrice" />
      </div>
      <div>
        <label htmlFor="prod-isFeatured">IsFeatured</label>
        <input
          type="checkbox"
          value={true}
          name="isFeatured"
          id="prod-isFeatured"
        />
      </div>
      <div>
        <label htmlFor="prod-onSale">OnSale</label>
        <input type="checkbox" value={true} name="onSale" id="prod-onSale" />
      </div>
      <div>
        <label htmlFor="prod-stock">Stock</label>
        <input type="text" name="stock" id="prod-stock" />
      </div>
      <div>
        <label htmlFor="prod-mainImage">MainImage</label>
        <input type="file" name="mainImage" id="prod-mainImage" />
      </div>
      <div>
        <label htmlFor="prod-image2">image2</label>
        <input type="file" name="image2" id="prod-image2" />
      </div>
      <div>
        <label htmlFor="prod-image3">image3</label>
        <input type="file" name="image3" id="prod-image3" />
      </div>
      <div>
        <label htmlFor="prod-image4">image4</label>
        <input type="file" name="image4" id="prod-image4" />
      </div>
      <div>
        <label htmlFor="prod-category">Category</label>
        <select name="category" id="prod-category">
          {categories &&
            categories.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ProductForm;
