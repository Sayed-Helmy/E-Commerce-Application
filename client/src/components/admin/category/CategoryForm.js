import axios from "axios";
import React from "react";

const CategoryForm = () => {
  const category = {
    _id: "625554689667e91cfd60ac7e",
    name: "Headphones",
    description: "Enjoy With our Headphones Category",
    image: "/uploads/image-1649759336567.png",
    featured: false,
    order: 0,
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const category = await axios.post(
        "http://localhost:5000/api/v1/categories",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(category);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="cat-name">Name</label>
        <input type="text" id="cat-name" name="name" />
      </div>
      <div>
        <label htmlFor="cat-description">Description</label>
        <input type="text" id="cat-description" name="description" />
      </div>
      <div>
        <label htmlFor="cat-Image">Image</label>
        <input type="file" id="cat-Image" name="image" />
      </div>
      <div>
        <label htmlFor="cat-featured">Featured</label>
        <input type="checkbox" value={true} id="cat-featured" name="featured" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default CategoryForm;
